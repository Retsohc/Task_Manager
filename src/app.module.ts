import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Carga variables desde .env automáticamente
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST || 'localhost', // Dirección del servidor MySQL
      port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT, 10) : 3306, // Puerto MySQL
      username: process.env.DATABASE_USER || 'root', // Usuario de la base de datos
      password: process.env.DATABASE_PASSWORD || '', // Contraseña
      database: process.env.DATABASE_NAME || 'task_manager', // Nombre de la base de datos
      autoLoadEntities: true, // Carga entidades automáticamente
      synchronize: true, // Sincroniza automáticamente (no usar en producción)
    }),
    TasksModule,
  ],
})
export class AppModule {}