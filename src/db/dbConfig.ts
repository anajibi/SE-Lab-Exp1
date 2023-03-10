import EnvVars from '../constants/EnvVars';
import {Knex} from 'knex';

export default {
  client: 'pg',
  connection: EnvVars.DB.ConnectionString  ,
  searchPath:['knex', 'public'],
  migrations: {
    directory: './dist.migrate/migrate/migrations',
    tableName: 'knex_migrations',
  },
  seeds: {
    directory: './dist.migrate/migrate/seeds',
  },
} as Knex.Config;
