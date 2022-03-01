import { ListSolosUseCase } from './listSolosUseCase';
import { ListSolosController } from './listSolosController';
import { SoloRepository } from './../../infra/typeORM/repositories/soloRepository';

export default ()=>{
    const soloRepository=SoloRepository.checkAndCreateRepository()
    const listSoloUseCase=new ListSolosUseCase(soloRepository)
    const listSolosController=new ListSolosController(listSoloUseCase)
    return listSolosController

}