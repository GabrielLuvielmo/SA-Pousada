import { sql } from './db.js';

export class DatabasePostgres {
  // DATABASE -- USUARIOS --
  async listUsuario() {
    const usuarios = await sql`SELECT * FROM Usuario`;
    return usuarios;
  }

  async createUsuario(Usuario) {
    const { email, senha, confirmar_senha } = Usuario;
    const result = await sql`
      INSERT INTO Usuario (email, senha, confirmar_senha)
      VALUES (${email}, ${senha}, ${confirmar_senha})
      RETURNING idUsuario
    `;
    return result[0]; // Retorna o idUsuario gerado
  }

  async updateUsuario(idUsuario, Usuario) {
    const { email, senha, confirmar_senha } = Usuario;
    await sql`
      UPDATE Usuario SET 
        email = ${email},
        senha = ${senha},
        confirmar_senha = ${confirmar_senha}
      WHERE idUsuario = ${idUsuario}
    `;
  }

  async deleteUsuario(idUsuario) {
    await sql`DELETE FROM Usuario WHERE idUsuario = ${idUsuario}`;
  }

  // DATABASE -- RESERVAS --
  async listReserva() {
    const reservas = await sql`SELECT * FROM Reserva`;
    return reservas;
  }

  async createReserva(Reserva, idUsuario) {
    const { datai: dataInicio, dataf: dataFim, quarto: quartoReserva } = Reserva;
    const result = await sql`
      INSERT INTO Reserva (dataInicio, dataFim, quartoReserva, idUsuario)
      VALUES (${dataInicio}, ${dataFim}, ${quartoReserva}, ${idUsuario})
      RETURNING idReserva
    `;
    return result[0]; // Retorna o idReserva gerado
  }

  async updateReserva(idReserva, Reserva) {
    const { datai: dataInicio, dataf: dataFim, quarto: quartoReserva } = Reserva;
    await sql`
      UPDATE Reserva SET 
        dataInicio = ${dataInicio},
        dataFim = ${dataFim},
        quartoReserva = ${quartoReserva}
      WHERE idReserva = ${idReserva}
    `;
  }

  async deleteReserva(idReserva) {
    await sql`DELETE FROM Reserva WHERE idReserva = ${idReserva}`;
  }

  // DATABASE -- FEEDBACK --
    // Método para listar feedbacks
  async listFeedback() {
    try {
      const feedbacks = await sql`SELECT * FROM Feedback`;
      return feedbacks;
    } catch (error) {
      console.error('Erro na query listFeedback:', error);
      throw new Error('Erro ao buscar feedbacks');
      }
    }
    
  
    // Método para criar um feedback
    async createFeedback(Feedback) {
      const { nota: notaFeedback, descricao: descricaoFeedback } = Feedback;
  
      const result = await sql`
          INSERT INTO Feedback (notaFeedback, descricaoFeedback)
          VALUES (${notaFeedback}, ${descricaoFeedback})
          RETURNING idFeedback
      `;
      return result[0]; // Retorna o ID gerado
  }
  
    // Método para atualizar um feedback
    async updateFeedback(idFeedback, Feedback) {
      const { nota: notaFeedback, descricao: descricaoFeedback } = Feedback;
  
      try {
        await sql`
          UPDATE Feedback SET 
            notaFeedback = ${notaFeedback},
            descricaoFeedback = ${descricaoFeedback}
          WHERE idFeedback = ${idFeedback}
        `;
      } catch (error) {
        console.error('Erro ao atualizar feedback:', error);
        throw error;
      }
    }
  
    // Método para excluir um feedback
    async deleteFeedback(idFeedback) {
      try {
        await sql`DELETE FROM Feedback WHERE idFeedback = ${idFeedback}`;
      } catch (error) {
        console.error('Erro ao excluir feedback:', error);
        throw error;
      }
    }

  
}
