import { ICultivar } from './ICultivar';
export interface ICultivarRepository{
    create({
        id,
        nome,
        condutividade,
        disp_critico,
        disp_irrigar
    }:ICultivar):Promise<ICultivar>,
    show():Promise<Array<ICultivar>>,
    findById(id:string):Promise<ICultivar>,
    findByName(name:string):Promise<ICultivar>
}