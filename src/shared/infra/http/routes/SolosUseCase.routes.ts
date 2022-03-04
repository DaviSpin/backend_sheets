import { Router } from 'express';
import createSolo from '../../../../modules/Solos/UseCase/createSolo'
import listSolos from '../../../../modules/Solos/UseCase/listSolos'

const solo=Router()

solo.post('/solos',(req,res)=>{
    console.log('SHEET ',req)
    // return createSolo().handle(req,res)
})
// solo.put('/solos',(req,res)=>{
//     return updateSolo().handle(req,res)
// })
solo.get('/solos',(req,res)=>{
    return listSolos().handle(req,res)
})
// solo.get('/solos/:id',(req,res)=>{
//     return getSolo().handle(req,res)
// })
// solo.delete('/solos/:id',(req,res)=>{
//     return deleteSolo().handle(req,res)
// })

export{solo}