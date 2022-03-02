import { Column, Entity, PrimaryGeneratedColumn  } from 'typeorm';
// import { v4 as uuid4} from 'uuid';
import { ICultivar } from './../../../Protocols/ICultivar';

@Entity('cultivar')
export class Cultivar implements ICultivar{
    @PrimaryGeneratedColumn({type:'integer'})
    id?: number;
    @Column()
    nome: string;
    @Column()
    condutividade: number;
    @Column()
    disp_irrigar: number;
    @Column()
    disp_critico: number;
}