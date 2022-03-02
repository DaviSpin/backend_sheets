import { CreateSolosUseCase } from './createSolosUseCase';
import { ICreateSoloUseCase } from './../../Protocols/UseCase/ICreateSoloUseCase';
import { ISoloRepository } from './../../Protocols/ISoloRepository';
import {SoloRepositoryInMemory} from '../../repositorysMemory/in_Memory/SoloRepositoryInMemory'

let soloRepositoryInMemory:ISoloRepository
let soloUseCase:ICreateSoloUseCase
describe('[POST] - Solo',()=>{
    beforeEach(()=>{
        soloRepositoryInMemory=new SoloRepositoryInMemory()
        soloUseCase=new CreateSolosUseCase(soloRepositoryInMemory)
    })
    it('should be able to create "solo"',async ()=>{
        const solo={
            tipo:"Icapuí G15",
            transm_solo:0.87,
            capacidade:7.70,
            ponto_murcha:3.5,
            densidade_ap:1.00,
            disp_total:0.40
        }

        const resp=await soloUseCase.execute(solo)
        expect(resp).toHaveProperty('id')
        expect(resp.id).not.toBeNull()
    })
})