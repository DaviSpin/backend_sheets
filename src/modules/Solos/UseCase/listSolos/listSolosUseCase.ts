import { IListSolosUseCase } from './../../Protocols/UseCase/IListSolosUseCase';
import { ISolos } from './../../Protocols/ISolos';
import { ISoloRepository } from './../../Protocols/ISoloRepository';
export class ListSolosUseCase implements IListSolosUseCase{
    constructor(private soloRepository:ISoloRepository){}
    async execute():Promise<ISolos[]>{
        return await this.soloRepository.show()
    }
}