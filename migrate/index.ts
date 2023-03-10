import './pre-migrate';
import Knex from 'knex';
import config from '../src/db/dbConfig';
import logger from 'jet-logger';


const db = Knex(config);

(async () => {
  try {
    await db.migrate.down();
    await db.migrate.latest();
    await db.seed.run();
    logger.info('Migrations successful!');
  } catch (err) {
    logger.err('Error running migrate:'+String(err),);
  } finally {
    await db.destroy();
  }
})();



