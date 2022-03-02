import { ISolos } from "./ISolos";

export interface ISoloRepository{
    create({
        id,
        capacidade,
        densidade_ap,
        disp_total,
        ponto_murcha,
        tipo,
        transm_solo
    }:ISolos):Promise<ISolos>,
    show():Promise<Array<ISolos>>,
    findById(id:number):Promise<ISolos>
}