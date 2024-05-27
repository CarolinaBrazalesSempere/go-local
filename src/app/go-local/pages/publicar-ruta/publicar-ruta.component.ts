import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItinerarioService } from '../../services/itinerario.service';
import { authService } from '../../services/auth.service';
import { CiudadService } from '../../services/ciudad.service';
import { Ciudad } from '../../interfaces/Ciudad';


@Component({
  selector: 'app-publicar-ruta',
  templateUrl: './publicar-ruta.component.html',
  styleUrls: ['./publicar-ruta.component.css']
})
export class PublicarRutaComponent implements OnInit {
  itinerarioForm: FormGroup;
  loggedInUser: any;
  ciudades: Ciudad[] = [];
  tieneItinerario: boolean = false;
  mostrarAlerta: boolean = false;

  constructor(
    private fb: FormBuilder,
    private itinerarioService: ItinerarioService,
    private authService: authService,
    private ciudadService: CiudadService
  ) {
    this.itinerarioForm = this.fb.group({
      guia: this.fb.group({
        idGuia: [{ value: '', disabled: true }, Validators.required]
      }),
      idCiudad: ['', Validators.required],
      descripcion: ['', [Validators.required, Validators.maxLength(500)]],
      duracion: ['', [Validators.required, Validators.min(0)]],
      fecha_disponible: ['', Validators.required],
      plazas_max: ['', [Validators.required, Validators.min(1)]],
      precio: ['', [Validators.required, Validators.min(0)]],
      monte: [false],
      playa: [false],
      cultura: [false],
      gastronomia: [false],
      enologico: [false],
      ecologico: [false],
      nocturno: [false],
      relajacion: [false],
      rural: [false],
      local: [false]
    });
  }

  ngOnInit(): void {
    this.authService.getLoggedInUser().subscribe(user => {
      this.loggedInUser = user;
      if (this.loggedInUser) {
        this.itinerarioForm.patchValue({
          id_guia: this.loggedInUser.idUsuario
        });

        // Verificar si el guía tiene itinerarios existentes
        this.verificarItinerariosExistentes(this.loggedInUser.idUsuario);
      }
    });

    // Obtener la lista de ciudades
    this.ciudadService.getCiudades().subscribe(ciudades => {
      this.ciudades = ciudades;
    });
  }

  verificarItinerariosExistentes(guiaId: number): void {
    // Llamar al servicio para obtener los itinerarios del guía
    this.itinerarioService.getItinerariosByGuiaId(guiaId).subscribe(
      itinerarios => {
        // Verificar si el guía tiene itinerarios
        this.tieneItinerario = itinerarios.length > 0;
        if (this.tieneItinerario) {
          // Si el guía tiene itinerarios existentes, mostrar la alerta y deshabilitar el formulario
          this.mostrarAlertaError();
          this.itinerarioForm.disable(); // Deshabilitar el formulario
        } else {
          // Si el guía no tiene itinerarios existentes, habilitar el formulario
          this.itinerarioForm.enable(); // Habilitar el formulario
        }
      },
      error => {
        console.error('Error al obtener los itinerarios del guía:', error);
      }
    );
  }

  mostrarAlertaError() {
    // Definir una variable booleana para controlar la visibilidad de la alerta en el HTML
    this.mostrarAlerta = true;
  }

  onSubmit() {
    if (this.itinerarioForm.valid) {
      const formValue = { ...this.itinerarioForm.value, guia: { idGuia: this.loggedInUser.idUsuario } };
      this.itinerarioService.createItinerario(formValue).subscribe(response => {
        console.log('Itinerario creado', response);
        // Redireccionar o mostrar mensaje de éxito
      }, error => {
        console.error('Error creando itinerario', error);
      });
    }
  }
}
