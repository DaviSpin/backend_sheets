import express, { NextFunction, Request, Response } from 'express'
import { parcela } from './routes/Parcelas.routes'
import { solo } from './routes/SolosUseCase.routes'
import { connection } from '../typeORM'
import cors from 'cors'

import 'express-async-errors'
import { AppErrors } from '../../errors/AppErrors'

const app = express()
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
    connection.create().then(db => console.log(`Conectado ao banco ${db.driver.database}`))

}


// console.log(`Conectado ao banco ${db.driver.database}`)
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(parcela)
app.use(solo)
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof AppErrors) {
        return res.status(error.statusCode).json({ msg: error.errorMsg })
    }
    console.log(error)
    return res.status(500).json({ msg: 'Internal error' })
})



export { app }