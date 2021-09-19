
import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/users.model';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';


// interface UserCreationAttrs{
//     email : string,
//     password : string
// }

@Entity()
@ObjectType()
export class Note{
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    title: string;

    @Field()
    @Column()
    fullText: string;

    @Field()
    @Column()
    author: string

    @Field()
    @Column()
    date: Date

    @ManyToOne(() => User, user => user.id)
    user: User;



}