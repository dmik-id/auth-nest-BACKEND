import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetNoteArgs } from './dto/args/get-note.args';
import { Note } from './models/note';


@Injectable()
export class NotesService {

    constructor(
        @InjectRepository(Note)
        private notesRepository: Repository<Note>,
        
    
    ) {}
    
    public async getNotes():Promise<Note[]>{
        return this.notesRepository.find()

    }



}
