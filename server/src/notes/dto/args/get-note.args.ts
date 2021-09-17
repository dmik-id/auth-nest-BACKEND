import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class GetNoteArgs{
    @Field()
    id : number

    @Field()
    title : string

    @Field()
    data : Date

    @Field()
    author : string


    
}