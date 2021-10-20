import { IParcelas } from "modules/Parcelas/Protocols/IParcelas";
import { Column, Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity('parcelas')
class Parcela implements IParcelas{
    @PrimaryGeneratedColumn ({unsigned:true})
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
    
    id_cultivar?: number;
    id_solo?: number;
    id_reservatorio?: number;


}