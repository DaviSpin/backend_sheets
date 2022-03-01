import { CreateSolosUseCase } from './createSolosUseCase';
import { CreateSoloController } from './createSolosController';
import { SoloRepository } from './../../infra/typeORM/repositories/soloRepository';
export default ()=>{
    const soloRepository=SoloRepository.checkAndCreateRepository()
    const createSolosUseCase= new CreateSolosUseCase(soloRepository)
    const createSoloController=new CreateSoloController(createSolosUseCase)
    return createSoloController
}