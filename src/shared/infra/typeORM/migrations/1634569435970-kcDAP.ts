import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class kcCultivares1634569435970 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'kcDAP',
            columns:[
                {
                    name:'id',
                    type:'binary',
                    width:16,
                    isPrimary:true,
                },
                {
                    name:'dap',
                    type:'int',
                    isNullable:true
                },
                {
                    name:'kc',
                    type:'decimal',
                    precision:5,
                    scale:2,
                    isNullable:true
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('kcDAP')
    }

}
