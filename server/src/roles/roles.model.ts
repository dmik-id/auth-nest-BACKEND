import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/users.model';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from 'typeorm';

// interface UserCreationAttrs{
//     email : string,
//     password : string
// }

@Entity()
export class Role{

  
    @PrimaryGeneratedColumn()
    id: number;


    @Column()
    value: string;


    @Column()
    description: string;



}