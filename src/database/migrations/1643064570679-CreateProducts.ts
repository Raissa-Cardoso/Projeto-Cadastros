import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1643064570679 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"products",
                columns:[                   
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },                    
                    {
                        name:"category_id",
                        type:"uuid",  
                    },
                    {
                        name:"name",
                        type:"varchar"
                    },
                    {
                        name:"price",
                        type:"numeric"
                    }, 
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    }      
                ],
                foreignKeys:[
                    {
                        name:"FKCategoryProducts",
                        referencedTableName:"categories",
                        referencedColumnNames:["id"],
                        columnNames:["category_id"],
                        onDelete:"SET NULL",
                        onUpdate:"SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products")
    }

}
