import { Admin } from "./Admin";

export interface PostBlog {
  idPost: number;
  titulo: string;
  contenido: string;
  autor: string;
  fechaPubli: Date;
  descripcion: string;
  minutosLectura: number;
  admin: Admin;
}
