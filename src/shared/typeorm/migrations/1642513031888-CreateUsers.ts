import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1642513031888 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns : [
                    {
                        name: 'id',
                        type : 'varchar',
                        isPrimary : true,
                        
                    },
                    // {
                    //     name: 'id',
                    //     type : 'uuid',
                    //     isPrimary : true,
                    //     generationStrategy : 'uuid',
                    //     default : 'uuid_generate_v4()'
                    // }
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique : true
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                    },
                    {
                        name: 'cpf',
                        type : "varchar",
                        isUnique : true,
                    },
                    {
                        name: 'telefone',
                        type : "varchar",
                        isNullable : true,
                    },
                    {
                        name: 'whatsapp',
                        type : "varchar",
                        isNullable : true,

                    },
                    {
                        name: 'inicio_plantus',
                        type : "date",
                        isNullable : true,
                    },
                    {
                        name: 'avatar',
                        type: 'varchar',
                        isNullable : true
                    },
                    {
                        name : 'created_at',
                        type : 'timestamp',
                        default : 'now()',
    
                    },
                    {
                        name : 'updated_at',
                        type : 'timestamp',
                        default : 'now()',
                        
                    }
    
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('users');

    }

}
