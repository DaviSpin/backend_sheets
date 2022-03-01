import { Response, Request } from 'express';
import { IListSolosUseCase } from './../../Protocols/UseCase/IListSolosUseCase';
export class ListSolosController{
    constructor(private listSolosUseCase:IListSolosUseCase){}
    async handle(req:Request,res:Response):Promise<Response>{
        const solos=await this.listSolosUseCase.execute()
        return res.status(200).json(solos)
    }
}