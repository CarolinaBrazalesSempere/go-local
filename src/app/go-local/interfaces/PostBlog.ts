import { Admin } from "./Admin";

export interface PostBlog {
  idPost: number;
  admin: Admin;
  titulo: string;
  parrafo1: string;
  contenido1: string;
  parrafo2: string;
  contenido2: string;
  parrafo3: string;
  contenido3: string;
  parrafo4: string;
  contenido4: string;
  autor: string;
  fechaPubli: Date;
  descripcion: string;
  minutosLectura: number;
}
