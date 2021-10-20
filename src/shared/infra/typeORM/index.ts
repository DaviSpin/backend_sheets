import "reflect-metadata";
import { createConnection,Connection,getConnectionOptions } from "typeorm";

export default async ():Promise<Connection>=>{
    const defaultOptions=await getConnectionOptions()
    return createConnection(defaultOptions)
}