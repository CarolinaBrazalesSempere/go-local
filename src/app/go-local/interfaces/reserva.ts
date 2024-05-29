import { Cliente } from "./Cliente";
import { Itinerario } from "./itinerario";

export interface Reserva {
  idReserva: number;
  fecha: Date;
  itinerario: Itinerario;
  cliente: Cliente;
}
