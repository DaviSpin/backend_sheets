import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AlterKcDAPAddFK1634671053377 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('kcDAP',new TableColumn({
            name:'id_cultivar',
            type:'int',
        }))
        await queryRunner.createForeignKey('kcDAP',new TableForeignKey({
            name:'FkCultivarkcDAP',
            columnNames:['id_cultivar'],
            referencedTableName:'cultivar',
            referencedColumnNames:['id'],
            onDelete:'CASCADE',
            onUpdate:'CASCADE'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('kcDAP','id_cultivar')
        await queryRunner.dropForeignKey('kcDAP','FkCultivarkcDAP')
    }

}
