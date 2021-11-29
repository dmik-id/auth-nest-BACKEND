import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./users/users.model";
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { AuthModule } from './auth/auth.module';
import { GraphQLModule } from "@nestjs/graphql";
import { NotesModule } from './notes/notes.module';
import { Note } from "./notes/models/note";
import { FileModule } from './file/file.module';
import { MulterModule } from '@nestjs/platform-express';

require('dotenv').config()


@Module({
    controllers:[],
    providers:[],
    imports:[  
        GraphQLModule.forRoot({
            autoSchemaFile: true,
        }),

        MulterModule.register({
            dest: './files',
          }),

        ConfigModule.forRoot({
            envFilePath : `.${process.env.NODE_ENV}.env`, 
        }),
        TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        entities: [User, Role, Note],
        synchronize: true,
        autoLoadEntities: true,
      }), UsersModule, RolesModule, AuthModule, NotesModule, FileModule]

})



export class AppModule{}