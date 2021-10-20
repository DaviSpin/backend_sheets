import { ICreateParcelaUseCase } from './../../Protocols/UseCases/ICreateParcelaUseCase';
import { Request, Response } from 'express';


export class CreateParcelaController{
    constructor(
        private ParcelaUseCase:ICreateParcelaUseCase
    ){}
    async handle(req:Request,resp:Response):Promise<Response>{
        const {
            id,
            nome,
            area,
            esp_linhas,
            esp_emissores,
            vazao,
            eficiencia_irrigacao,
            taxa_aplicacao,
            id_cultivar,
            id_solo,
            id_reservatorio,
            esp_plantas,
            projecao_rama_max,
            porcao_area,
            kl,
            cap_agua,
            qtd_min_pulso,
            qtd_max_pulso,
            duracao_media_pulso,
            com_transmissividade_solo,
            com_eficiencia_irrigacao,
            data_transplantio 
        }=req.body

        const parcela=await this.ParcelaUseCase.execute({
            id,
            nome,
            area,
            esp_linhas,
            esp_emissores,
            vazao,
            eficiencia_irrigacao,
            taxa_aplicacao,
            id_cultivar,
            id_solo,
            id_reservatorio,
            esp_plantas,
            projecao_rama_max,
            porcao_area,
            kl,
            cap_agua,
            qtd_min_pulso,
            qtd_max_pulso,
            duracao_media_pulso,
            com_transmissividade_solo,
            com_eficiencia_irrigacao,
            data_transplantio 
        })

        return resp.status(201).json(parcela)
    }
}