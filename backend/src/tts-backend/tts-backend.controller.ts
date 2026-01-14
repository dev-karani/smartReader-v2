import { Controller,Get, Query,Param, Post, Body, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('tts-backend')
export class TtsBackendController {
    @Get()
    getAll(@Query('age') age:number){
        return [{age}]
    }
    @Get(':id')
    getOneBook(@Param('id') id:string){
        return {id}
    }
    @Post()
    addBook(@Body() CreateBookDto:CreateBookDto){
        return {
            name:CreateBookDto.docname,
            size:CreateBookDto.size
        }
    }
    @Put(':id')
    update(@Body() updateBookDto:UpdateBookDto,
     @Param('id') id:string){
        return {
            id,
        ...updateBookDto
        }
    }
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    removeBook(@Param('id') id:string){
        return {}
    }
}
