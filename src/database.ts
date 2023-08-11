import {sql} from '@databases/pg';
import createPool from '@databases/pg';
import tables from '@databases/pg-typed';
import DatabaseSchema from './__generated__';
require('dotenv').config();

export {sql};


const db = createPool({
  bigIntMode: 'number',
  connectionString: process.env.DATABASE_URL,
});

export default db;

// You can list whatever tables you actually have here:
const {pokemons} = tables<DatabaseSchema>({
  databaseSchema: require('./__generated__/schema.json'),
});
export {pokemons};