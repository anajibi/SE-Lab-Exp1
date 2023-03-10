import {Knex} from 'knex';
import logger from 'jet-logger';

const TABLE_NAME = 'samples_table';

const seed = async function (knex: Knex): Promise<void> {
    await knex.table(TABLE_NAME).select().then(async (rows) => {
        if (rows.length === 0) {
            await knex.table(TABLE_NAME).insert([
                {sample: 'Development'},
                {sample: 'Design'},
                {sample: 'Testing'},
            ]);
            logger.info(`Wrote initial data to '${TABLE_NAME}' table`);
        } else
            logger.info(`'${TABLE_NAME}' table already has data`);
    });
};

export {seed};
