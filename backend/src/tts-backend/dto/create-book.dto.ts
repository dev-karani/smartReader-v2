import {IsString, Length} from 'class-validator'

export class CreateBookDto{
    docname: string
    doctype:string
    size: string
    genre:string
}