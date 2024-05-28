import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Itinerario } from 'src/app/go-local/interfaces/itinerario';
import { AuthService } from 'src/app/go-local/services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'shared-tarjeta-guia',
  templateUrl: './tarjeta-guia.component.html',
  styleUrls: ['./tarjeta-guia.component.css']
})
export class TarjetaGuiaComponent implements OnInit {
  idUsuario: number | null = null;
  itinerario: Itinerario | null = null;
  idGuia: number = 0;
  fechaDisponible!: Date;

  constructor(private apiService: ApiService, private authService: AuthService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idGuia = +params['idGuia']; // Obtener idGuia de la URL
      this.authService.getLoggedInUser().subscribe(user => {
        if (user) {
          this.idUsuario = user.idUsuario;
          // Llamar a la función para obtener el itinerario por el ID de la guía
          this.apiService.getItinerarioByIdGuia(this.idGuia).subscribe(
            (itinerario) => {
              this.itinerario = itinerario;
              this.itinerario.fechaDisponible = this.fechaDisponible;
            },
            (error) => {
              console.error('Error al obtener el itinerario', error);
            }
          );
        } else {
          this.idUsuario = null;
        }
      });
    });
  }

  reservarItinerario(): void {
    if (this.itinerario && this.idUsuario) {
      const idItinerario = this.itinerario.idItinerario; // Obtener el ID del itinerario
      this.apiService.reservarItinerario(idItinerario, this.idUsuario).subscribe(
        (response) => {
          console.log('Reserva realizada con éxito', response);
        },
        (error) => {
          console.error('Error al realizar la reserva', error);
        }
      );
    }
  }
}
