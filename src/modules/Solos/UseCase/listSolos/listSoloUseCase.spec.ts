import { ICreateSoloUseCase } from './../../Protocols/UseCase/ICreateSoloUseCase';
import { CreateSolosUseCase } from './../createSolo/createSolosUseCase';
import { SoloRepositoryInMemory } from './../../repositorysMemory/in_Memory/SoloRepositoryInMemory';
import { IListSolosUseCase } from 'modules/Solos/Protocols/UseCase/IListSolosUseCase';
import { ISoloRepository } from './../../Protocols/ISoloRepository';
import { ListSolosUseCase } from './listSolosUseCase';

let soloRepositoryInMemory:ISoloRepository
let soloUseCase:IListSolosUseCase
let createSoloUseCase:ICreateSoloUseCase
let spy
describe('[LIS] - Solos',()=>{
    afterEach(()=>{
        spy.mockRestore()
    })
    beforeAll(async()=>{
        soloRepositoryInMemory=new SoloRepositoryInMemory()
        soloUseCase=new ListSolosUseCase(soloRepositoryInMemory)
        createSoloUseCase=new CreateSolosUseCase(soloRepositoryInMemory)
        await createSoloUseCase.execute({
            tipo:"Icapuí G15",
            transm_solo:0.87,
            capacidade:7.70,
            ponto_murcha:3.5,
            densidade_ap:1.00,
            disp_total:0.40
        })
        await createSoloUseCase.execute({
            tipo:"Icapuí G16",
            transm_solo:0.87,
            capacidade:7.70,
            ponto_murcha:3.5,
            densidade_ap:1.00,
            disp_total:0.40
        })
        
    })
    it('should be able to create "solo"',async ()=>{
        spy=jest.spyOn(soloRepositoryInMemory,'show')
        const resp=await soloUseCase.execute()
        expect(resp).toHaveLength(2)
        expect(spy).toBeCalledTimes(1)
    })
})