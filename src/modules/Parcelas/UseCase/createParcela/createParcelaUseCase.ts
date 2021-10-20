import { IParcelaRepository } from "./../../Protocols/IParcelaRepository";
import { IParcelas } from "modules/Parcelas/Protocols/IParcelas";
import { ICreateParcelaUseCase } from "./../../Protocols/UseCases/ICreateParcelaUseCase";

export class CreateParcelaUseCase implements ICreateParcelaUseCase {
    constructor(private ParcelaRepository: IParcelaRepository) { }
    async execute({
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
        data_transplantio,
    }: IParcelas): Promise<IParcelas> {
        const parcela = await this.ParcelaRepository.create({
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
            data_transplantio,
        });
        return parcela
    }
}
