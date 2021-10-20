import { Entity } from 'typeorm';
import { IReservatorios } from './../../../Protocols/IReservatorios';
import { Column, PrimaryColumn } from 'typeorm';
import { v4 as uuid4} from 'uuid';


@Entity('reservatorios')
export class Reservatorio implements IReservatorios{
    @PrimaryColumn({type:'binary',width:16})
    id?: string;
    @Column()
    nome: string;
    @Column()
    cond_agua: number;
    constructor(){
        if(!this.id){
            this.id=uuid4()
        }
    }

}