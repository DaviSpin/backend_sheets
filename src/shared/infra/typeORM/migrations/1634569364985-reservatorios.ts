import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class reservatorios1634569364985 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'reservatorios',
            columns:[
                {
                    name:'id',
                    type:'binary',
                    width:16,
                    isPrimary:true,
                },
                {
                    name:'nome',
                    type:'varchar',
                    isNullable:false
                },
                {
                    name:'cond_agua',
                    type:'decimal',
                    isNullable:true
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('reservatorios')
    }

}
