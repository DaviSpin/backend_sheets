import { ISolos } from '../../../Protocols/ISolos';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
// import { v4 as uuid4} from 'uuid';
@Entity('solos')
export class Solos implements ISolos{
    @PrimaryGeneratedColumn({type:'integer'})
    id?: number;
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

}