import { ISolos } from "modules/Solos/Protocols/ISolos";
import { Repository, getRepository } from "typeorm";
import { ISoloRepository } from "./../../../Protocols/ISoloRepository";

import { Solos } from '../entities/solo'

export class SoloRepository implements ISoloRepository {
    private repository: Repository<Solos>
    private static Repository_instance: ISoloRepository | null = null

    private constructor() {
        this.repository = getRepository(Solos)
    }
    static checkAndCreateRepository() {
        if (!SoloRepository.Repository_instance) {
            SoloRepository.Repository_instance = new SoloRepository()
        }
        return SoloRepository.Repository_instance
    }
    async create({
        id,
        capacidade,
        densidade_ap,
        disp_total,
        ponto_murcha,
        tipo,
        transm_solo,
    }: ISolos): Promise<ISolos> {
        const solo = this.repository.create({
            id,
            capacidade,
            densidade_ap,
            disp_total,
            ponto_murcha,
            tipo,
            transm_solo,
        })

        await this.repository.save(solo)

        return solo
    }
    async show(): Promise<ISolos[]> {
        const solos=await this.repository.find()
        return solos
    }
    async findById(id: string): Promise<ISolos> {
        const solo=await this.repository.findOne(id)
        return solo
    }
}
