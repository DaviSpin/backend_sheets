import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class registros1634569755028 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'registro',
            columns:[
                {
                    name:'id',
                    type:'int',
                    isGenerated:true,
                    isPrimary:true
                },
                {
                    name:'data',
                    type:'timestamp',
                    default:'now()'
                },
                {
                    name:'eto',
                    type:'int',
                    isNullable:true,
                },
                {
                    name:'prec',
                    type:'int',
                    isNullable:true
                },
                {
                    name:'prec_anterior',
                    type:'int',
                    isNullable:true
                },
                {
                    name:'vol_irrigado',
                    type:'decimal',
                    scale:2,
                    isNullable:true
                },
                {
                    name:'lam_usuario',
                    type:'decimal',
                    scale:2,
                    isNullable:true
                },
                {
                    name:'nao_irrigar',
                    type:'boolean',
                    default:false
                },
                {
                    name:'lixiviacao',
                    type:'boolean',
                    default:false
                },
                {
                    name:'fertirrigacao',
                    type:'boolean',
                    default:false
                },
                {
                    name:'pulsos_ferti',
                    type:'int',
                    isNullable:true
                },
                {
                    name:'tempo_injecao',
                    type:'int',
                    isNullable:true
                },
                {
                    name:'tempo_avanco',
                    type:'int',
                    isNullable:true
                },
                {
                    name:'arm_inic_estimado',
                    type:'decimal',
                    isNullable:true
                },
                {
                    name:'arm_inic_anterior',
                    type:'decimal',
                    isNullable:true
                },
                {
                    name:'etr_anterior',
                    type:'decimal',
                    isNullable:true
                },
                {
                    name:'negativo_acum_ontem',
                    type:'decimal',
                    isNullable:true
                },
                {
                    name:'rep_LB',
                    type:'decimal',
                    isNullable:true
                },
                {
                    name:'excedente_anterior',
                    type:'decimal',
                    isNullable:true
                },
                // {
                //     name:'transimissividade',
                //     type:''
                // },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('registro')
    }

}
