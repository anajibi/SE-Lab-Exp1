import {Knex} from 'knex';
import logger from 'jet-logger';

export const TABLE_NAME = 'sample_table';

const up = async function (knex: Knex): Promise<void> {
    await knex.schema.createTable(TABLE_NAME, (table) => {
        table.increments('id').primary();
        table.string('sample').notNullable().unique();
        table.timestamps(true, true);
    }).then(() => {
        logger.info(`Created '${TABLE_NAME}' table`);
    });
};
const down = async function (knex: Knex): Promise<void> {
    await knex.schema.dropTable(TABLE_NAME);
    logger.info(`Dropped '${TABLE_NAME}' table`);

};

export {up, down};
