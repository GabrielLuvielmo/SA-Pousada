import { sql } from './db.js';
import jwt from 'jsonwebtoken';

export class DatabasePostgres {
  // DATABASE -- USUARIOS --
  async listUsuario() {
    const usuarios = await sql`SELECT * FROM Usuario`;
    return usuarios;
  }

  async createUsuario({ email, senha }) {
    try {
      // Insere um novo usuário na tabela Usuario
      const result = await sql`
        INSERT INTO Usuario (email, senha)
        VALUES (${email}, ${senha})
        RETURNING idUsuario
      `;
      
      if (result.length === 0) {
        throw new Error('Erro ao salvar usuário no banco de dados.');
      }
      
      return result[0].idUsuario; // Retorna o ID do usuário criado
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw new Error('Erro ao salvar usuário no banco de dados.');
    }
  }

  async getUsuarioByEmail(email) {
    try {
      const result = await sql`
        SELECT * FROM Usuario WHERE email = ${email}
      `;
      
      if (result.length === 0) {
        throw new Error('Usuário não encontrado');
      }

      return result[0]; // Retorna o primeiro usuário encontrado
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      throw error; // Lança erro para ser tratado em um nível superior
    }
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
  async listFeedback() {
    try {
      const feedbacks = await sql`SELECT * FROM Feedback`;
      return feedbacks;
    } catch (error) {
      console.error('Erro na query listFeedback:', error);
      throw new Error('Erro ao buscar feedbacks');
    }
  }

  async createFeedback(Feedback) {
    const { nota: notaFeedback, descricao: descricaoFeedback } = Feedback;
    const result = await sql`
      INSERT INTO Feedback (notaFeedback, descricaoFeedback)
      VALUES (${notaFeedback}, ${descricaoFeedback})
      RETURNING idFeedback
    `;
    return result[0]; // Retorna o ID gerado
  }

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

  async deleteFeedback(idFeedback) {
    try {
      await sql`DELETE FROM Feedback WHERE idFeedback = ${idFeedback}`;
    } catch (error) {
      console.error('Erro ao excluir feedback:', error);
      throw error;
    }
  }

  // Função para gerar token JWT após login
  gerarToken(usuario) {
    const payload = {
      id: usuario.idUsuario,
      email: usuario.email
    };
    
    const token = jwt.sign(payload, 'seu-segredo', { expiresIn: '1h' });
    return token;
  }

  // Função para verificar o token JWT
  verificarToken(token) {
    try {
      const decoded = jwt.verify(token, 'seu-segredo');
      return decoded;
    } catch (error) {
      throw new Error('Token inválido');
    }
  }
}
