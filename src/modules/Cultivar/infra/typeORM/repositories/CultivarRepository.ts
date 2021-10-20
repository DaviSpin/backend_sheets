import { ICultivar } from "modules/Cultivar/Protocols/ICultivar";
import { Repository,getRepository } from "typeorm";
import { ICultivarRepository } from "./../../../Protocols/ICultivarRepository";

import {Cultivar} from '../entities/cultivar'

export class CultivarRepository implements ICultivarRepository {
    private static repository_instance:ICultivarRepository | null=null
    private repository:Repository<Cultivar>

    private constructor(){
        this.repository=getRepository(Cultivar)
    }

    static checkAndCreateRepository(){
        if(!CultivarRepository.repository_instance){
            CultivarRepository.repository_instance=new CultivarRepository()
        }
        return CultivarRepository.repository_instance
    }

    async create({
        id,
        nome,
        condutividade,
        disp_critico,
        disp_irrigar,
    }: ICultivar): Promise<ICultivar> {
        const cultivar=this.repository.create({
            id,
            nome,
            condutividade,
            disp_critico,
            disp_irrigar
        })
        
        await this.repository.save(cultivar)

        return cultivar
    }
    async show(): Promise<ICultivar[]> {
        const cultivares=this.repository.find()
        return cultivares
    }
    async findById(id: string): Promise<ICultivar> {
        const cultivar=this.repository.findOne(id)
        return cultivar
    }
    async findByName(name: string): Promise<ICultivar> {
        const cultivar=this.repository.findOne(name)
        return cultivar
    }
}
