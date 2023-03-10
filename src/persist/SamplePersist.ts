import {Knex} from 'knex';
import {LogType} from '@src/models/LogType';

const TableName = 'log_types';

function add(knex: Knex,
             sample: any): Promise<any> {
    return knex.table(TableName)
        .insert(sample, ['id', 'sample', 'created_at', 'updated_at'])
        .then(res => res[0] as ILogTypeRow)
        .then(fromDbRow);
}

function fromDbRow(row: ILogTypeRow): LogType {
    return new LogType(row.id, row.sample, row.created_at, row.updated_at);
}

function fromDbRows(rows: ILogTypeRow[]): LogType[] {
    return rows.map(fromDbRow);
}

interface ILogTypeRow {
    id: number;
    sample: string;
    created_at: Date;
    updated_at: Date;
}

export default {
    save: add,
} as const;
