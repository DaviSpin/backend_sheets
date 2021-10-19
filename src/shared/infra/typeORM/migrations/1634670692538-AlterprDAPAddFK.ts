import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AlterprDAPAddFK1634670692538 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('prDAP',new TableColumn({
            name:'id_cultivar',
            type:'int',
        }))
        await queryRunner.createForeignKey('prDAP',new TableForeignKey({
            name:'FkCultivarPrDAP',
            columnNames:['id_cultivar'],
            referencedTableName:'cultivar',
            referencedColumnNames:['id'],
            onDelete:'CASCADE',
            onUpdate:'CASCADE'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('prDAP','id_cultivar')
        await queryRunner.dropForeignKey('prDAP','FkCultivarPrDAP')
    }

}
