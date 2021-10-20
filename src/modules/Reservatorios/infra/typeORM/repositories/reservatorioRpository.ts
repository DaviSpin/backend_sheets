import { getRepository, Repository } from 'typeorm';
import { IReservatorios } from 'modules/Reservatorios/Protocols/IReservatorios';
import { IReservatorioRepositorio } from './../../../Protocols/IReservatorioRepository';

import {Reservatorio} from '../entities/reservatorios'

export class ReservatorioRepository implements IReservatorioRepositorio{
    private repository:Repository<Reservatorio>
    private static Repository_intance:IReservatorioRepositorio|null=null
    private constructor(){
        this.repository=getRepository(Reservatorio)
    }
    static checkAndCreateRepository(){
        if(!ReservatorioRepository.Repository_intance){
            ReservatorioRepository.Repository_intance=new ReservatorioRepository()
        }
        return ReservatorioRepository.Repository_intance
    }
    async create({ id, nome, cond_agua }: IReservatorios): Promise<IReservatorios> {
        const reservatorio=this.repository.create({
            id,
            nome,
            cond_agua
        })

        await this.repository.save(reservatorio)

        return reservatorio
    }
    async delete(id: string): Promise<void> {
        await this.repository.delete(id)
    }
    async show(): Promise<Array<IReservatorios>> {
        const reservatorios=await this.repository.find()
        return reservatorios
    }

}