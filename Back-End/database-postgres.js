import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async listUsuario() {
    const usuarios = await sql`select * from Usuarios`;
    return usuarios;
  }

  async createUsuario(Usuario) {
    const idUsuario = randomUUID();
    console.log('id', id);
    const email = Usuario.email;
    const senha = Usuario.senha;
    
    await sql`insert into Usuario (idUsuario, email, senha)
    values (${idUsuario}, ${email}, ${senha})`
  }

  async updateUsuario(idUsuario, Usuario) {
    const email = Usuario.email;
    const senha = Usuario.senha;

    await sql`update Usuario set 
        email = ${email},
        senha = ${senha}
        where idUsuario = ${idUsuario}
    `;
  }

  async deleteUsuario(idUsuario) {
    await sql`delete from Usuario where id = ${idUsuario}`
  }

}