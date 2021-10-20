import { IReservatorios } from "../Protocols/IReservatorios";

export interface IReservatorioRepositorio {
    create({ id, nome, cond_agua }: IReservatorios): Promise<IReservatorios>;
    delete(id:string):Promise<void>,
    show():Promise<Array<IReservatorios>>
}
