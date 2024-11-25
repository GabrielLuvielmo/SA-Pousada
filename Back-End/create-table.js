import { sql } from './db.js'

sql`
CREATE TABLE Usuario (
  idUsuario text PRIMARY KEY NOT NULL,
  email varchar(255) NOT NULL,
  senha varchar(255) NOT NULL,
  confirmar_senha varchar(255) NOT NULL
);

CREATE TABLE Reserva (
  idReserva text PRIMARY KEY NOT NULL,
  idUsuario text NOT NULL,
  dataInicio date NOT NULL,
  dataFim date NOT NULL,
  quartoReserva varchar(255) NOT NULL,
  FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario)
);

CREATE TABLE Feedback (
  idFeedback text PRIMARY KEY NOT NULL,
  idUsuario text NOT NULL,
  notaFeedback INT NOT NULL,
  descricaoFeedback VarChar(255) NOT NULL,
  FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario)
);

CREATE TABLE Quarto (
  idQuarto SERIAL PRIMARY KEY NOT NULL,
  nomeQuarto varchar(255) NOT NULL,
  statusQuarto varchar(255) default 'disponivel' NOT NULL,
  capacidadeQuarto INT NOT NULL,
  descricaoQuarto varchar(255)
);

INSERT INTO Quarto (nomeQuarto, statusQuarto, capacidadeQuarto, descricaoQuarto) VALUES
('Domo', 'disponivel', 3, 'Uma experiência única em formato de domo...'),
('Cabana', 'disponivel', 2, 'Romântica e charmosa, a Cabana...'),
('Chalé Família', 'disponivel', 5, 'Espaçoso e acolhedor, o Chalé Família...'),
('Charrua', 'disponivel', 2, 'Transformada a partir de um antigo ônibus...'),
('Suite com Cozinha', 'disponivel', 3, 'Com todo o charme de uma suíte exclusiva...');

`.then(() => {
  console.log('tabela criada');
})

