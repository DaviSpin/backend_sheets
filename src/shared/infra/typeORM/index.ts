import "reflect-metadata";
import { createConnection, Connection, getConnectionOptions, getConnection } from "typeorm";


export const connection = {
    async create(): Promise<Connection> {
        const defaultOptions = await getConnectionOptions()
        const connection = await createConnection()
        return connection
    },
    async runMigrations():Promise<void>{
        await getConnection().runMigrations()
    },
    async clear(query:string) {
        await getConnection().query(query)
        // await getConnection().query('drop tables if exists cultivar,fertirrigacao,kcdap,parcelas,prdap,raizdap,registro,reservatorios,solos,migrations;')
    },
    async close() {
        await getConnection().close();
    },
}