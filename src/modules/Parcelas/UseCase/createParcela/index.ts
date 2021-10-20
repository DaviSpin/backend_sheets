import { CreateParcelaController } from './createParcelaController';
import { ParcelasRepository } from './../../infra/typeORM/repositories/parcelasRepository';
import { CreateParcelaUseCase } from './createParcelaUseCase';


export default ():CreateParcelaController=>{
    const parcelaRepository=ParcelasRepository.checkAndCreateRepository()
    const createParcelaUseCase=new CreateParcelaUseCase(parcelaRepository)
    const createParcelaController= new CreateParcelaController(createParcelaUseCase)
    
    return createParcelaController
}