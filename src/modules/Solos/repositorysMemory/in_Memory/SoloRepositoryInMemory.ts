import { randomInt } from 'crypto';
import { Solos } from './../../infra/typeORM/entities/solo';
import { ISolos } from 'modules/Solos/Protocols/ISolos';
import { ISoloRepository } from './../../Protocols/ISoloRepository';

export class SoloRepositoryInMemory implements ISoloRepository{
    private solos:ISolos[]=[]
    async create(data: ISolos): Promise<ISolos> {
        const solo= new Solos()
        Object.assign(solo,{...data})
        solo.id=randomInt(1000)
        this.solos.push(solo)
        return solo
    }
    async show(): Promise<ISolos[]> {
        return this.solos
    }
    async findById(id: number): Promise<ISolos> {
        const solo=this.solos.find(solo=>solo.id===id)
        return solo
    }

}