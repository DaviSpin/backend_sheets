import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AlterParcelasAddFk1634668847460 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('parcelas',new TableColumn({
            name:'id_cultivar',
            type:'integer',
            width:16
        }))
        await queryRunner.createForeignKey('parcelas',new TableForeignKey({
            name:'FkCultivar',
            columnNames:['id_cultivar'],
            referencedTableName:'cultivar',
            referencedColumnNames:['id'],
            onDelete:'CASCADE',
            onUpdate:'CASCADE'
        }))
        await queryRunner.addColumn('parcelas',new TableColumn({
            name:'id_solo',
            type:'integer',
            width:16
        }))
        await queryRunner.createForeignKey('parcelas',new TableForeignKey({
            name:'FkSolo',
            columnNames:['id_solo'],
            referencedTableName:'solos',
            referencedColumnNames:['id'],
            onDelete:'CASCADE',
            onUpdate:'CASCADE'
        }))
        await queryRunner.addColumn('parcelas',new TableColumn({
            name:'id_reservatorio',
            type:'integer',
            width:16
        }))
        await queryRunner.createForeignKey('parcelas',new TableForeignKey({
            name:'FkReservatorio',
            columnNames:['id_reservatorio'],
            referencedTableName:'reservatorios',
            referencedColumnNames:['id'],
            onDelete:'CASCADE',
            onUpdate:'CASCADE'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('parcelas','id_cultivar')
        await queryRunner.dropColumn('parcelas','id_solo')
        await queryRunner.dropColumn('parcelas','id_reservatorio')
        await queryRunner.dropForeignKey('parcelas','FkCultivar')
        await queryRunner.dropForeignKey('parcelas','FkSolo')
        await queryRunner.dropForeignKey('parcelas','FkReservatorio')
    }

}
