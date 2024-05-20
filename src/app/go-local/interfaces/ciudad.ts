import { Pais } from "./pais";

export interface Ciudad {
  id_ciudad: number;
  pais: Pais;
  nombreCiudad: string;
}
