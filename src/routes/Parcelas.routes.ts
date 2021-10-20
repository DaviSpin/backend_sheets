import { Router } from "express";

import createParcela from '../modules/Parcelas/UseCase/createParcela'

const router=Router()

router.post('/parcela',(req,resp)=>{
    return createParcela().handle(req,resp)
})
router.get('/parcelas/:id',(req,resp)=>{
    return resp.status(200).json({name:'test'})
})

export {router}