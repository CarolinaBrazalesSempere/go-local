import { Cliente } from "./Cliente";
import { Guia } from "./Guia";
import { Itinerario } from "./itinerario";

export interface Reseña {
  idReseña: number;
  puntuacion: number;
  fecha: Date;
  contenido: string;
  itinerario: Itinerario;
  cliente: Cliente;
  guia: Guia;
}
