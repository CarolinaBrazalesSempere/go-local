
import { Ciudad } from "./ciudad";
import { Guia } from "./guia";


export interface Itinerario {
  id_itinerario: number;
  guia: Guia;
  ciudad: Ciudad;
  descripcion: string;
  duracion: number;
  fechaDisponible: Date; // No tengo claro como manejar las fechas
  plazas_max: number;
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
