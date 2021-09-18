import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class CreateNoteInput {

    @Field({nullable: true})
    title: string;
    fullText?: string
    author?: string;
    date?: string



}