import express,{Request,Response} from 'express'
import { router } from './routes/test.routes'


const app=express()

app.use(router)

export {app}