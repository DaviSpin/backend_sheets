import { Column, PrimaryColumn, Entity  } from 'typeorm';
import { v4 as uuid4} from 'uuid';
import { ICultivar } from './../../../Protocols/ICultivar';

@Entity('cultivar')
export class Cultivar implements ICultivar{
    @PrimaryColumn({type:'binary',width:16})
    id?: string;
    @Column()
    nome: string;
    @Column()
    condutividade: number;
    @Column()
    disp_irrigar: number;
    @Column()
    disp_critico: number;
    constructor(){
        if(!this.id){
            this.id=uuid4()
        }
    }

}