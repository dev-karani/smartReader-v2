 import { Controller,Get, Query,Param, Post, Body, Put, Delete, HttpCode, HttpStatus ,ParseUUIDPipe,NotFoundException} from '@nestjs/common';
import { UpdateBookDto } from './dto/update-book.dto';
import { TtsBackendService } from './tts-backend.service';
import { CreateBookDto } from './dto/create-book.dto';
import type { UUID } from 'crypto';

@Controller('tts-backend')
export class TtsBackendController {
    constructor (private TtsBackendService:TtsBackendService){}

    @Get()
    getAllBooks(){
        return this.TtsBackendService.getAllBooks()
    }

    @Get()
    getAll(@Query('age') age:number){
        return [{age}]
    }
    @Get(':id')
    getOneBook(@Param('id', ParseUUIDPipe) id:UUID ){
        try{
              return this.TtsBackendService.getOneBook(id)
        }catch(error){
            throw new NotFoundException(error.message)
        }
    }
    @Post()
    addBook(@Body() CreateBookDto:CreateBookDto){
        return this.TtsBackendService.addBook(CreateBookDto)
    }
    @Put(':id')
    update(@Body() updateBookDto:UpdateBookDto,
     @Param('id', ParseUUIDPipe) id:UUID){
        return this.TtsBackendService.updateBook(id,updateBookDto)
    }
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    removeBook(@Param('id', ParseUUIDPipe) id:UUID ){
        return this.TtsBackendService.removeBook(id)
    }
}
