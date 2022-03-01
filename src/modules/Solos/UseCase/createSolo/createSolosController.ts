import { ICreateSoloUseCase } from './../../Protocols/UseCase/ICreateSoloUseCase';
import { Request, Response } from 'express';
export class CreateSoloController {
    constructor(private createSoloUseCase: ICreateSoloUseCase) { }
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            tipo,
            transm_solo,
            capacidade,
            ponto_murcha,
            densidade_ap,
            disp_total
        } = req.body
        const solo=await this.createSoloUseCase.execute({
            tipo,
            transm_solo,
            capacidade,
            ponto_murcha,
            densidade_ap,
            disp_total
        })
        return res.status(201).json(solo)
    }
}