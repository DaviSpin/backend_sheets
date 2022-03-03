require('dotenv').config();
export default {
    "development": {
        "name":"default",
        "type": "mysql",
        "host": "localhost",
        "port": 3306,
        "username": process.env.USER,
        "password": process.env.PASSWORD,
        "database": process.env.DATABASE_DEV,
        "migrations": ["./src/shared/infra/typeORM/migrations/*.ts"],
        "entities": ["./src/modules/**/infra/typeORM/entities/*.ts"],
        "cli": {
            "migrationsDir": "./src/shared/infra/typeORM/migrations"
        },
        "synchronize": true
    },
    "test": {
        "name":"test",
        "type": "mysql",
        "host": "localhost",
        "port": 3306,
        "username": process.env.USER,
        "password": process.env.PASSWORD,
        "database": process.env.DATABASE_TEST,
        "migrations": ["./src/shared/infra/typeORM/migrations/*.ts"],
        "entities": ["./src/modules/**/infra/typeORM/entities/*.ts"],
        "cli": {
            "migrationsDir": "./src/shared/infra/typeORM/migrations"
        },
        "synchronize": true
    }
}
