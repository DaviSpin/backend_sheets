import { IListSolosUseCase } from './../../Protocols/UseCase/IListSolosUseCase';
import { ISolos } from './../../Protocols/ISolos';
import { ISoloRepository } from './../../Protocols/ISoloRepository';
export class ListSolosUseCase implements IListSolosUseCase{
    constructor(private SoloRepository:ISoloRepository){}
    async execute():Promise<ISolos[]>{
        return await this.SoloRepository.show()
    }
}