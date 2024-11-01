import { sql } from './db.js'

sql`
CREATE TABLE Usuario (
  email varchar(255) NOT NULL,
  senha varchar(255) NOT NULL,
  idUsuario text PRIMARY KEY NOT NULL
);

CREATE TABLE Reserva (
  idReserva text PRIMARY KEY NOT NULL,
  idUsuario text NOT NULL,
  dataInicio date NOT NULL,
  dataFim date NOT NULL,
  quartoReserva varchar(255) NOT NULL,
  FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario)
);
`.then(() => {
  console.log('tabela criada');
})