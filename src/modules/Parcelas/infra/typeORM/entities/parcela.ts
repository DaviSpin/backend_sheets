import { Reservatorio } from '../../../../Reservatorios/infra/typeORM/entities/reservatorios';
import { Solos } from '../../../../Solos/infra/typeORM/entities/solo';
import { Cultivar } from '../../../../Cultivar/infra/typeORM/entities/cultivar';
import { IParcelas } from "modules/Parcelas/Protocols/IParcelas";

import { Column, CreateDateColumn, Entity,JoinColumn,ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
// import {v4 as uuid4} from 'uuid'
@Entity('parcelas')
export class Parcela implements IParcelas{
    @PrimaryGeneratedColumn({type:'integer'})
    id?: number;
    @Column({nullable:false})
    nome: string;
    @Column({nullable:true})
    area: number;
    @Column({nullable:false})
    data_transplantio: Date;
    @Column({nullable:true})
    esp_linhas: number;
    @Column({nullable:true})
    esp_emissores: number;
    @Column({nullable:true})
    vazao: number;
    @Column({nullable:true})
    eficiencia_irrigacao: number;
    @Column({nullable:true})
    taxa_aplicacao: number;
    @Column({nullable:true})
    esp_plantas: number;
    @Column({nullable:true})
    projecao_rama_max: number;
    @Column({nullable:true})
    porcao_area: number;
    @Column({nullable:true})
    kl: number;
    @Column({nullable:true})
    cap_agua: number;
    @Column({nullable:true})
    qtd_max_pulso: number;
    @Column({nullable:true})
    qtd_min_pulso: number;
    @Column({nullable:true})
    duracao_media_pulso: number;
    @Column({nullable:true,default:false})
    com_transmissividade_solo: boolean;
    @Column({nullable:true,default:false})
    com_eficiencia_irrigacao: boolean;

    
    @CreateDateColumn()
    created_at?:Date
    @UpdateDateColumn()
    updated_at?:Date
    
    @Column()
    id_cultivar?: number;
    @Column()
    id_solo?: number;
    @Column()
    id_reservatorio?: number;

    @ManyToOne(type=>Cultivar)
    @JoinColumn({name:"id_cultivar"})
    cultivar:Cultivar

    @ManyToOne(type=>Solos)
    @JoinColumn({name:"id_solo"})
    solo:Solos

    @ManyToOne(type=>Reservatorio)
    @JoinColumn({name:"id_reservatorio"})
    reservatorio:Reservatorio

}