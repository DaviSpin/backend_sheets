require('dotenv').config();
export default [
    {
        "name":"default",
        "type": "mysql",
        "host": "localhost",
        "port": 3306,
        "username": process.env.USER,
        "password": process.env.PASSWORD,
        "database": process.env.DATABASE,
        "migrations": ["./src/shared/infra/typeORM/migrations/*.ts"],
        "entities": ["./src/modules/**/infra/typeORM/entities/*.ts"],
        "cli": {
            "migrationsDir": "./src/shared/infra/typeORM/migrations"
        },
    }
]