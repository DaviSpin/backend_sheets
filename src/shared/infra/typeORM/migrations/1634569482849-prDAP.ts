import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class profRaizDap1634569482849 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'prDAP',
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
                    name:'rama',
                    type:'decimal',
                    precision:5,
                    scale:2,
                    isNullable:true
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('prDAP')
    }

}
