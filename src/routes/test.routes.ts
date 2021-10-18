import { Router } from "express";

const router=Router()

router.get('/test',(req,resp)=>{
    return resp.status(200).json({name:'test'})
})

export {router}