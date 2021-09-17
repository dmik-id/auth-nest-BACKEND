
import { Resolver,Query, Args } from '@nestjs/graphql';
import { GetNoteArgs } from './dto/args/get-note.args';
import { Note } from './models/note';
import { NotesService } from './notes.service';

@Resolver(() => Note)
export class NotesResolver {

    constructor(private notesService: NotesService){}

    @Query(() => [Note], {name: 'note'})
    getNote():Promise<Note[]> {
        return this.notesService.getNotes()
       
    }
}
