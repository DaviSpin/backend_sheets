import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class projRamasCultivares1634569831724 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'raizDAP',
            columns:[
                {
                    name:'id',
                    type:'integer',
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy: 'increment'
                },
                {
                    name:'dap',
                    type:'int',
                    isNullable:true
                },
                {
                    name:'raiz',
                    type:'int',
                    isNullable:true
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('raizDAP')
    }

}
