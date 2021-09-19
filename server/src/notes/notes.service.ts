import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNoteInput } from './dto/input/create-note.input';
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

    public async createNote(createNoteData:CreateNoteInput ):Promise<CreateNoteInput>{
        
        const note: CreateNoteInput = {
            ...createNoteData
        }
        console.log(note)
        console.log(Date.now())
        note.title = createNoteData.title || ''
        note.fullText = createNoteData.fullText || ''
        note.author = createNoteData.author || ''
        note.date = '123'
        this.notesRepository.save(note)
        return note
    }



}
