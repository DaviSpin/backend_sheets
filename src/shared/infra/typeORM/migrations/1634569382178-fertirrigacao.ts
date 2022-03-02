import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class fertirrigacao1634569382178 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'fertirrigacao',
            columns:[
                {
                    name:'id',
                    type:'integer',
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy: 'increment',
                },
                {
                    name:'temp_avanco',
                    type:'int',
                    isNullable:true,
                },
                {
                    name:'tempo_min_apli',
                    type:'int',
                    isNullable:true,
                },
                {
                    name:'lamina_pulso',
                    type:'decimal',
                    scale:2,
                    isNullable:true
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('fertirrigacao')
    }

}
