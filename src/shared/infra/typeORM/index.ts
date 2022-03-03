import "reflect-metadata";
import { createConnection,Connection,getConnectionOptions } from "typeorm";

export default async ():Promise<Connection>=>{
    // const defaultOptions:any=process.env.NODE_ENV === 'test'?configuration.test:configuration.development
    const defaultOptions:any=await getConnectionOptions()
    console.log(defaultOptions.test)
    return createConnection(process.env.NODE_ENV === 'test'?defaultOptions.test:defaultOptions.development)
}