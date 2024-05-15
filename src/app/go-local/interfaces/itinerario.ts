export interface Itinerario {
  id_itinerario: number;
  id_guia: number;
  id_ciudad: number;
  descripcion: string;
  duracion: number;
  fecha_disponible: string; // No tengo claro como manejar las fechas
  plazas_max: number;
}
