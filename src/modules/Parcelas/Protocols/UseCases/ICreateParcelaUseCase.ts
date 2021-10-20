import { IParcelas } from "../IParcelas";

export interface ICreateParcelaUseCase{
    execute({
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
    }:IParcelas):Promise<IParcelas>
}