// src/config/config.service.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

class DatabaseConfig {

    constructor(
        private env: { [k: string]: string | undefined }
    ) { }
  
    public getTypeOrmConfig(): TypeOrmModuleOptions {
      return {
        type: 'postgres',
        host: this.env.DATABASE_HOST || '127.0.0.1',
        port: parseInt(this.env.DATABASE_PORT) || 5432,
        username: this.env.DATABASE_USER || 'postgres',
        password: this.env.DATABASE_PASSWORD || 'mysecretpassword',
        database: 'encurtador_url',
        entities: ['src/model/*.ts'],
        migrationsTableName: 'migration',
        migrations: ['migration/*.ts'],
        cli: {
          migrationsDir: 'src/migration',
        },
      };
    }
  }

  const databaseConfig = new DatabaseConfig(process.env);

export { databaseConfig };
