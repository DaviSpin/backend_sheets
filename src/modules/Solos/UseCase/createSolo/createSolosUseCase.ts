import { ICreateSoloUseCase } from './../../Protocols/UseCase/ICreateSoloUseCase';
import { ISolos } from './../../Protocols/ISolos';
import { ISoloRepository } from './../../Protocols/ISoloRepository';

export class CreateSolosUseCase implements ICreateSoloUseCase {
    constructor(private soloRepository: ISoloRepository) { }

    async execute({ id, tipo, transm_solo,
        capacidade,
        ponto_murcha,
        densidade_ap,
        disp_total }: ISolos): Promise<ISolos> {
        const solo = await this.soloRepository.create({
            id,
            tipo,
            transm_solo,
            capacidade,
            ponto_murcha,
            densidade_ap,
            disp_total
        })
        return solo
    }
}