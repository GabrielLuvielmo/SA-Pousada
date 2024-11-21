// import 'dotenv/config';
// import postgres from 'postgres';

// let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

// const sql = postgres({
//   host: PGHOST,
//   database: PGDATABASE,
//   username: PGUSER,
//   password: PGPASSWORD,
//   port: 5432,
//   ssl: false,
// });

// export { sql };

async function connect() {

  if(global.connection)
      return global.connection.connect();

  const {Pool} = require('pg');
  const pool = new Pool({
      connectionString: process.env.CONNECTION_STRING
  })
  const client = await pool.connect();
  console.log("Criou o pool de conexão");

  const res = await client.query('select now()');
  console.log(res.rows[0]);
  client.release();

  global.connection = pool;
  return pool.connect();
}

connect();