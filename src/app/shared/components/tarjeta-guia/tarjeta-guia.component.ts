import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Ciudad } from 'src/app/go-local/interfaces/ciudad';
import { Guia } from 'src/app/go-local/interfaces/Guia';
import { Itinerario } from 'src/app/go-local/interfaces/itinerario';
import { Reseña } from 'src/app/go-local/interfaces/Reseña';
import { ReservaService } from '../../../go-local/Services/reserva.service';
import { Reserva } from 'src/app/go-local/interfaces/reserva';
import { AuthService } from 'src/app/go-local/services/auth.service';
import { ClienteService } from 'src/app/go-local/Services/cliente.service';

@Component({
  selector: 'shared-tarjeta-guia',
  templateUrl: './tarjeta-guia.component.html',
  styleUrls: ['./tarjeta-guia.component.css'],
})
export class TarjetaGuiaComponent implements OnInit {
  @Input() idGuia!: number;
  guia!: Guia;
  itinerario!: Itinerario;
  reviews: Reseña[] = [];
  ciudad!: Ciudad;
  averageReview: number = 0;
  reserva!: Reserva;
  idUsuario!: number;

  constructor(
    private apiService: ApiService,
    private reservaService: ReservaService,
    private authService: AuthService,
    private clienteService: ClienteService  // Asegúrate de que esté en private
  ) {}

  ngOnInit(): void {
    // Obtener el idUsuario del usuario logueado
    this.authService.getLoggedInUser().subscribe((user) => {
      if (user) {
        this.idUsuario = user.idUsuario;

        // Obtener el cliente usando el ID del usuario
        this.clienteService.getClienteByUserId(this.idUsuario).subscribe((cliente) => {
          // Cargar los datos del guía
          this.apiService.getGuiaById(this.idGuia).subscribe((guiaData) => {
            this.guia = guiaData;

            // Cargar el itinerario del guía
            this.apiService.getItinerarioByIdGuia(this.idGuia).subscribe((itinerarioData) => {
              this.itinerario = itinerarioData;

              // Inicializa la reserva con los datos del itinerario y cliente
              this.reserva = {
                idReserva: 0,  // Esto puede ser un valor por defecto o autogenerado
                fecha: this.itinerario.fechaDisponible,  // Usa la fecha del itinerario del guía
                itinerario: this.itinerario,  // Asigna el objeto itinerario completo
                cliente: cliente,  // Asigna el objeto cliente completo
              };
            });

            // Cargar la ciudad del guía
            this.apiService.getCiudadByGuiaId(this.idGuia).subscribe((ciudadData) => {
              this.ciudad = ciudadData;
            });
          });

          // Cargar las reseñas del guía
          this.apiService.getReseñasByGuiaId(this.idGuia).subscribe((reviewsData) => {
            this.reviews = reviewsData;
          });

          // Cargar la puntuación promedio del guía
          this.apiService.getMediaPuntuacionByGuiaId(this.idGuia).subscribe((averageReviewData) => {
            this.averageReview = averageReviewData;
          });
        });
      }
    });
  }

  crearReserva(): void {
    this.authService.getLoggedInUser().subscribe((user) => {
      if (user) {
        this.clienteService.getClienteByUserId(user.idUsuario).subscribe((cliente) => {
          this.apiService.getItinerarioByIdGuia(this.idGuia).subscribe((itinerarioData) => {
            this.reserva = {
              idReserva: 0,  // Puede ser 0 si se genera en el backend
              fecha: this.itinerario.fechaDisponible,  // Usa la fecha del itinerario del guía
              itinerario: this.itinerario,  // Incluye el itinerario completo
              cliente: cliente,  // Incluye el cliente completo
            };

            // Solo enviamos la reserva con la estructura adecuada
            this.reservaService.createReserva(this.reserva).subscribe(
              () => {
                this.reservaService.setCancelMessage('Reserva creada con éxito');
              },
              (error) => {
                console.error('Error al crear la reserva: ', error);
                this.reservaService.setCancelMessage('Error al crear la reserva');
              }
            );
          });
        });
      }
    });
  }


}
