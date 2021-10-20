import { ISolos } from '../../../Protocols/ISolos';
import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid4} from 'uuid';


@Entity('solos')
export class Solos implements ISolos{
    @PrimaryColumn({type:'binary',width:16})
    id?: string;
    @Column()
    tipo: string;
    @Column()
    transm_solo: number;
    @Column()
    capacidade: number;
    @Column()
    ponto_murcha: number;
    @Column()
    densidade_ap: number;
    @Column()
    disp_total: number;
    constructor(){
        if(!this.id){
            this.id=uuid4()
        }
    }

}