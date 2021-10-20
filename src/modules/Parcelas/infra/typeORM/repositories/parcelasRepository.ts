import { IParcelas } from "../../../Protocols/IParcelas";
import { Repository, getRepository } from "typeorm";
import { IParcelaRepository } from "../../../Protocols/IParcelaRepository";
import { Parcela } from "../entities/parcela";
export class ParcelasRepository implements IParcelaRepository {
    private repository: Repository<Parcela>;
    private static Instance_repository: IParcelaRepository | null = null;
    private constructor() {
        this.repository = getRepository(Parcela);
    }
    static checkAndCreateRepository() {
        if (!ParcelasRepository.Instance_repository) {
            ParcelasRepository.Instance_repository = new ParcelasRepository();
        }
        return ParcelasRepository.Instance_repository;
    }
    async create({
        id,
        nome,
        area,
        esp_linhas,
        esp_emissores,
        vazao,
        eficiencia_irrigacao,
        taxa_aplicacao,
        id_cultivar,
        id_solo,
        id_reservatorio,
        esp_plantas,
        projecao_rama_max,
        porcao_area,
        kl,
        cap_agua,
        qtd_min_pulso,
        qtd_max_pulso,
        duracao_media_pulso,
        com_transmissividade_solo,
        com_eficiencia_irrigacao,
        data_transplantio,
    }: IParcelas): Promise<IParcelas> {
        const parcela = this.repository.create({
            id,
            nome,
            area,
            esp_linhas,
            esp_emissores,
            vazao,
            eficiencia_irrigacao,
            taxa_aplicacao,
            id_cultivar,
            id_solo,
            id_reservatorio,
            esp_plantas,
            projecao_rama_max,
            porcao_area,
            kl,
            cap_agua,
            qtd_min_pulso,
            qtd_max_pulso,
            duracao_media_pulso,
            com_transmissividade_solo,
            com_eficiencia_irrigacao,
            data_transplantio,
        });

        await this.repository.save(parcela)

        return parcela
    }
    async show(): Promise<IParcelas[]> {
        const parcelas=await this.repository.find()
        return parcelas
    }
    async findByName(nome_parcela: string): Promise<IParcelas[]> {
        const parcelas=await this.repository.find({
            where:{
                name:nome_parcela
            }
        })
        return parcelas
    }
    async findById(id: string): Promise<IParcelas> {
        const parcela=await this.repository.findOne(id)
        return parcela
    }
}
