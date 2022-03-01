import { ISolos } from 'modules/Solos/Protocols/ISolos';
export interface ICreateSoloUseCase{
    execute({
        tipo,
        transm_solo,
        capacidade,
        ponto_murcha,
        densidade_ap,
        disp_total
    }:ISolos):Promise<ISolos>
}