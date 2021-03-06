import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class cultivar1634569399592 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"cultivar",
            columns:[
                {
                    name:'id',
                    type:'integer',
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy: 'increment',
                },
                {
                    name:'name',
                    type:'varchar',
                    isNullable:false
                },
                {
                    name:'condutividade',
                    type:'int',
                    isNullable:true
                },
                {
                    name:'disp_irrigar',
                    type:'decimal',
                    precision:5,
                    scale:3,
                    isNullable:true
                },
                {
                    name:'disp_critico',
                    type:'decimal',
                    precision:5,
                    scale:3,
                    isNullable:true
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('cultivar')
    }

}
