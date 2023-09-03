import { Knex } from 'knex';
import { PG_CONF } from "../config";

const dbConfig: Knex.Config = {
    client: 'postgresql',
    connection: {
        host: PG_CONF.HOST,
        port: PG_CONF.PORT,
        database: PG_CONF.DB_NAME,
        user: PG_CONF.USERNAME,
        password: PG_CONF.PASSWORD,
    },
    pool: {
        min: 2,
        max: 10,
    },
};

export default dbConfig;
