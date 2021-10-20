import { Router } from "express";

import createParcela from '../modules/Parcelas/UseCase/createParcela'

const parcela=Router()

parcela.post('/parcela',(req,resp)=>{
    return createParcela().handle(req,resp)
})
parcela.get('/parcelas/:id',(req,resp)=>{
    return resp.status(200).json({name:'test'})
})

export {parcela}