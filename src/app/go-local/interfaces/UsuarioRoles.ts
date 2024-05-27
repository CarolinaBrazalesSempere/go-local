import { Rol } from "./Rol";
import { Usuario } from "./Usuario";

export interface UsuarioRoles {
  idUsuarioRoles: number;
  rol: Rol;
  usuario: Usuario;
}
