import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AlterRaizDAPAddFK1634671070642 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('raizDAP',new TableColumn({
            name:'id_cultivar',
            type:'binary',
            width:16
        }))
        await queryRunner.createForeignKey('raizDAP',new TableForeignKey({
            name:'FkCultivarRaizDAP',
            columnNames:['id_cultivar'],
            referencedTableName:'cultivar',
            referencedColumnNames:['id'],
            onDelete:'CASCADE',
            onUpdate:'CASCADE'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('raizDAP','id_cultivar')
        await queryRunner.dropForeignKey('raizDAP','FkCultivarRaizDAP')
    }

}
 