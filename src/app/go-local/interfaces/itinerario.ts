import { Ciudad } from './ciudad';
import { Guia } from './Guia';

export interface Itinerario {
  idItinerario: number;
  guia: Guia;
  ciudad: Ciudad;
  descripcion: string;
  duracion: number;
  fechaDisponible: Date;
  plazas_max: number;
  precio: DoubleRange;
  monte: boolean;
  playa: boolean;
  cultura: boolean;
  gastronomia: boolean;
  enologico: boolean;
  ecologico: boolean;
  nocturno: boolean;
  relajacion: boolean;
  rural: boolean;
  local: boolean;
}
