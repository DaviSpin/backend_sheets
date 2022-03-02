import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class solos1634569521838 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'solos',
            columns:[
                {
                    name:'id',
                    type:'integer',
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy: 'increment',
                },
                {
                    name:'tipo',
                    type:'varchar',
                    isNullable:false
                },
                {
                    name:'transm_solo',
                    type:'decimal',
                    isNullable:true
                },
                {
                    name:'capacidade',
                    type:'decimal',
                    precision:5,
                    scale:2,
                    isNullable:true
                },
                {
                    name:'ponto_murcha',
                    type:'decimal',
                    precision:5,
                    scale:2,
                    isNullable:true
                },
                {
                    name:'densidade_ap',
                    type:'decimal',
                    isNullable:true
                },
                {
                    name:'disp_total',
                    type:'decimal',
                    isNullable:true
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('solos')
    }

}
