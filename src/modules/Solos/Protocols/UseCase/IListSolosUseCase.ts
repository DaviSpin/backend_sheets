import { ISolos } from "../ISolos";

export interface IListSolosUseCase{
    execute():Promise<ISolos[]>
}