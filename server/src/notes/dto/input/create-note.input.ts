import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class CreateNoteInput {

    @Field({nullable: true})
    title: string;
    @Field({nullable: true})
    fullText?: string
    @Field({nullable: true})
    author?: string;
    @Field({nullable: true})
    date?: string



}