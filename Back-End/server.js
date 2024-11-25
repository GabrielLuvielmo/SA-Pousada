import { fastify } from 'fastify';
import cors from '@fastify/cors';
import { DatabasePostgres } from './database-postgres.js';

const server = fastify();
const databasePostgres = new DatabasePostgres();

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']

});

// ENDPOINTS - Usuario (CRUD):

// CREATE

// CREATE USUARIO
server.post('/Usuario', async (request, reply) => {
    const body = request.body;
    let error = {};
    
    if (!body.email) {
      error.email = 'Faltou o Email!';
    }
    if (!body.senha) {
      error.senha = 'Erro na Senha!';
    }
    if (!body.confirmar_senha) {
      error.confirmar_senha = 'Faltou confirmar a Senha!';
    }
    if (body.senha !== body.confirmar_senha) {
      error.confirmar_senha = 'As senhas não coincidem!';
    }
  
    if (Object.keys(error).length > 0) {
      return reply.status(400).send(error);
    }
  
    const idUsuario = await databasePostgres.createUsuario(body);
    return reply.status(201).send({ message: 'Usuario Criado com Sucesso!', idUsuario });
  });


// READ

server.get('/Usuario', async () => {
    const usuario = await databasePostgres.listUsuario();
    return usuario;
});


// UPDATE

server.put('/Usuario/:id', async (request, reply) => {
    const idUsuario = request.params.id;
    const body = request.body;
    let error = {};

    if (!body.email) {
        error.email = 'Faltou o Email!';
    }

    if (!body.senha) {
        error.senha = 'Erro na Senha!';
    }

    if (!body.confirmar_senha) {
        error.confirmar_senha = 'Faltou confirmar a Senha!';
    }

    if (body.senha !== body.confirmar_senha) {
        error.confirmar_senha = 'As senhas não coincidem!';
    }

    if (!idUsuario) {
        error.idUsuario = 'Faltou o ID do Usuario!';
    }


    if (body.email && body.senha && body.confirmar_senha && idUsuario) {
        await databasePostgres.updateUsuario(idUsuario, body);
        return reply.status(204).send();
    } else {
        return reply.status(400).send(error);
    }

});


// DELETE

server.delete('/Usuario/:id', async (request, reply) => {
    const idUsuario = request.params.id;
    await databasePostgres.deleteUsuario(idUsuario);
    return reply.status(204).send();
});

// ENDPOINTS - Reserva (CRUD):

// CREATE

server.post('/Reserva', async (request, reply) => {
    const body = request.body;
    let error = {};
  
    if (!body.datai) {
      error.datai = 'Erro na Data de Início';
    }
  
    if (!body.dataf) {
      error.dataf = 'Erro na Data Final';
    }
  
    if (!body.quarto) {
      error.quarto = 'Erro na reserva do Quarto';
    }
  
    if (!body.idUsuario) {
      error.idUsuario = 'Usuário não identificado';
    }
  
    if (Object.keys(error).length > 0) {
      return reply.status(400).send(error);
    }
  
    try {
      const idReserva = await databasePostgres.createReserva(body, body.idUsuario);
      return reply.status(201).send({ message: 'Reserva Realizada com Sucesso', idReserva });
    } catch (err) {
      console.error(err);
      return reply.status(500).send({ message: 'Erro ao criar reserva', error: err.message });
    }
  });

// READ

server.get('/Reserva', async () => {
    const reserva = await databasePostgres.listReserva();
    return reserva;
});


// UPDATE

server.put('/Reserva/:id', async (request, reply) => {
    const idReserva = request.params.id;
    const body = request.body;
    let error = {};
    if (!body.datai) {
        error.datai = 'Erro na Data Inicial';
    }

    if (!body.dataf) {
        error.dataf = 'Erro na Data Final';
    }

    if (!body.quarto) {
        error.quarto = 'Erro no numero do Quarto';
    }

    if (!idReserva) {
        error.idReserva = 'Faltou o ID da Reserva!';
    }

    if (body.datai && body.dataf && body.quarto && idReserva) {
        await databasePostgres.updateReserva(idReserva, body);
        return reply.status(204).send();
    } else {
        return reply.status(400).send(error);
    }

});


// DELETE

server.delete('/Reserva/:id', async (request, reply) => {
    const idReserva = request.params.id;
    await databasePostgres.deleteReserva(idReserva);
    return reply.status(204).send();
});

// ENDPOINTS - Feedback (CRUD):

// CREATE
server.post('/Feedback', async (request, reply) => {
    const { nota, descricao } = request.body;

    // Validação dos dados recebidos
    if (!nota || !descricao) {
        return reply.status(400).send({
            message: 'Nota e descrição são obrigatórios.',
        });
    }

    try {
        const result = await databasePostgres.createFeedback({ nota, descricao });
        return reply.status(201).send({
            message: 'Feedback enviado com sucesso!',
            idFeedback: result.idFeedback, // Retorna o ID gerado
        });
    } catch (error) {
        console.error('Erro ao salvar feedback:', error);
        return reply.status(500).send({
            message: 'Erro ao enviar feedback. Tente novamente mais tarde.',
        });
    }
});

  
  
// READ
server.get('/Feedback', async (request, reply) => {
    try {
      const feedbacks = await databasePostgres.listFeedback();
      return reply.status(200).send(feedbacks);
    } catch (error) {
      console.error('Erro ao listar feedbacks:', error);
      return reply.status(500).send({ message: 'Erro ao listar feedbacks' });
    }
  });
  

// UPDATE
server.put('/Feedback/:id', async (request, reply) => {
    const idFeedback = request.params.id;
    const body = request.body;
    let error = {};

    if (!body.nota) {
        error.nota = 'Erro na Nota do Feedback'
    }
    if (!body.descricao) {
        error.descricao = 'Erro na Descrição do Feedback'
    }

    if (!idFeedback) {
        error.idFeedback = 'Faltou o ID do Feedback!'
    }

    if (body.nota && body.descricao && idReserva){
        await databasePostgres.updateFeedback(idFeedback, body);
        return reply.status(204).send();
    } else {
        return reply.status(400).send(error);
    }    
})

// DELETE
server.delete('/Feedback/:id', async (request, reply) => {
    const idFeedback = request.params.id;
    await databasePostgres.deleteFeedback(idFeedback);

    return reply.status(204).send();
})


server.listen({
    port: 3333
});
