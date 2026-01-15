import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { error } from 'console';

@Injectable()
export class TtsBackendService {
    private Books=[
        {
            id:randomUUID(),
            docname:"deepwork",
            genre: "self-help book",
            size:"13kb",
            doctype: "pdf"
        },
        {
            id:randomUUID(),
            docname:"Mind over Matter",
            genre: "esoteric book",
            doctype: "pdf",
            size:"13kb",

        }
    ]
    getAllBooks(){
        return this.Books
    }
    getOneBook(id:string){
        const matchingBook = this.Books.find(book=>book.id === id)
        if(!matchingBook){
            throw new Error(`Profile with ID ${id} not found.`)
        }
        return matchingBook
    }
    addBook(createBookDto:CreateBookDto){
    const addedBook = {
      id: randomUUID(),
      ...createBookDto
    };

    this.Books.push(addedBook);
    return addedBook;
    }

    updateBook(id:string, updateBookDto:UpdateBookDto){
        const book = this.Books.find(book => book.id === id)

        if (!book){
            throw new NotFoundException(`Profile with ID ${id} not found.`)
        }

        book.docname = updateBookDto.docname || book.docname
        book.size = updateBookDto.size || book.size
        book.genre = updateBookDto.genre || book.genre
        book.doctype = updateBookDto.doctype || book.doctype
        return book
    }
    removeBook(id:string){
        const bookIndex = this.Books.findIndex(book=> book.id === id)

       if (bookIndex === -1) {
            throw new NotFoundException(`Profile with ID ${id} not found.`)
       }
       this.Books.splice(bookIndex, 1);
       return this.Books
    }
}
