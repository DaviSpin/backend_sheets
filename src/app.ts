import express,{ NextFunction, Request, Response } from 'express'
import { parcela } from './routes/Parcelas.routes'

import CreateConnection from './shared/infra/typeORM'

import 'express-async-errors'
import { AppErrors } from './shared/errors/AppErrors'

const app = express()

CreateConnection().then(db=>console.log(`Conectado ao banco ${db.driver.database}`))

app.use(express.json())
app.use(parcela)


app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof AppErrors) {
        return res.status(error.statusCode).json({ msg: error.errorMsg })
    }
    console.log(error)
    return res.status(500).json({ msg: 'Internal error' })
})

export { app }