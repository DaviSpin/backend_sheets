import { Reservatorio } from './../../Reservatorios/infra/typeORM/entities/reservatorios';
import { Solos } from '../../Solos/infra/typeORM/entities/solo';
import { Cultivar } from './../../Cultivar/infra/typeORM/entities/cultivar';
export interface IParcelas{
    id?:number,
    nome:string,
    area:number,
    data_transplantio:string,
    esp_linhas:number,
    esp_emissores:number,
    vazao:number,
    eficiencia_irrigacao:number,
    taxa_aplicacao:number,
    esp_plantas:number,
    projecao_rama_max:number,
    porcao_area:number,
    kl:number,
    cap_agua:number,
    qtd_max_pulso:number,
    qtd_min_pulso:number,
    duracao_media_pulso:number,
    com_transmissividade_solo:boolean,
    com_eficiencia_irrigacao:boolean,
    id_cultivar?:number,
    id_solo?:number,
    id_reservatorio?:number,
    created_at?:Date,
    updated_at?:Date,
    cultivar?:Cultivar,
    solo?:Solos,
    reservatorio?:Reservatorio
}