import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 

  //DATABASE -- USUARIOS --

  async listUsuario() {
    const usuarios = await sql`select * from Usuario`;
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
 
  // DATABASE -- RESERVAS --

  async listReserva() {
    const reservas = await sql`select * from Reserva`;
    return reservas;
  }

  async createReserva(Reserva, idUsuario) {
    const idReserva = randomUUID();
    console.log('id', id);
    const dataInicio = Reserva.datai;
    const dataFim = Reserva.dataf;
    const quartoReserva = Reserva.quarto;
    
    await sql`insert into Reserva (idReserva, dataInicio, dataFim, quartoReserva)
    values (${idReserva}, ${dataInicio}, ${dataFim}, ${quartoReserva}, ${idUsuario})`
  }

  async updateReserva(idReserva, Reserva) {
    const dataInicio = Reserva.datai;
    const dataFim = Reserva.dataf;
    const quartoReserva = Reserva.quarto;

    await sql`update Reserva set 
        dataInicio = ${dataInicio},
        dataFim = ${dataFim}
        quartoReserva = ${quartoReserva}
        where idReserva = ${idReserva}
    `;
  }

  async deleteReserva(idReserva) {
    await sql`delete from Reserva where id = ${idReserva}`
  }

}