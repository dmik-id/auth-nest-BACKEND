
import { Resolver,Query, Args, Mutation } from '@nestjs/graphql';

import { CreateNoteInput } from './dto/input/create-note.input';
import { Note } from './models/note';
import { NotesService } from './notes.service';

@Resolver(() => Note)
export class NotesResolver {

    constructor(private notesService: NotesService){}

    @Query(() => [Note], {name: 'note'})
    getNote():Promise<Note[]> {
        return this.notesService.getNotes()
       
    }


    @Mutation(() => Note)
    createNote(@Args('createNoteData') createNoteData: CreateNoteInput): Promise<CreateNoteInput> {
        return this.notesService.createNote(createNoteData);
    }



}
