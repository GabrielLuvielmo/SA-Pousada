import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify();
const databasePostgres = new DatabasePostgres;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/Usuario', async (request, reply) => {
    const body = request.body;
    let error = {};

    if (!body.email) {
        error.email = 'Faltou o Email!'
    }
    if (!body.senha) {
        error.senha = 'Erro na Senha!'
    }

    if (body.email && body.senha){
        await databasePostgres.createUsuario(body);
        return reply.status(201).send('Usuario Criado com Sucesso!');
    } else {
        return reply.status(400).send(error);
    }
})

// READE
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
        error.email = 'Faltou o Email!'
    }
    if (!body.senha) {
        error.senha = 'Erro na Senha!'
    }
    if (!idUsuario) {
        error.idUsuario = 'Faltou o ID do Usuario!'
    }

    if (body.email && body.senha && idUsuario){
        await databasePostgres.updateUsuario(idUsuario, body);
        return reply.status(204).send();
    } else {
        return reply.status(400).send(error);
    }    
})

// DELETE
server.delete('/Usuario/:id', async (request, reply) => {
    const idUsuario = request.params.id;
    await databasePostgres.deleteUsuario(idUsuario);

    return reply.status(204).send();
})


server.listen({
    port: 3333
});
