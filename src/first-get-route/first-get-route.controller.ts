import { CreateCatDto } from './../classes/create-cat.dto';
import { Request, Response } from 'express';
import { Controller, Get, Req, HttpModule, Res, Param, ParamDecoratorEnhancer, Post, Body, Delete, Put } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Controller('get')
export class FirstGetRouteController {
    @Get(":id")
    index(@Req() request:Request, @Res() response: Response, @Param() params:ParamDecoratorEnhancer, @Param('id') id:ParamDecoratorEnhancer):HttpModule{
        console.log(request.params.id, params['id'], id);
        return response.status(200).json({message:"hello World!"}); 
    }
    @Post('/teste')
    async findOne():Promise<string>{
        return 'teste';
    }

    @Get('/observable:id')
    observable(@Param() params:ParamDecoratorEnhancer):Observable<number>{

        return of(params['id']);
    }

    @Post('/cat')
    async createCat(@Body() createDTO: CreateCatDto):Promise<string>{
        console.log(createDTO);
        return 'gato criado';
    }

    @Delete("/cat:id")
    async deleteCat(@Param('id') id:ParamDecoratorEnhancer):Promise<string>{
        return `gato ${id} excluido`;
    }

    @Put("/cat:id")
    async updateCat(@Param('id') id:ParamDecoratorEnhancer, @Param() params:ParamDecoratorEnhancer):Promise<string>{
        console.log(params['id']);
        return `o gato ${id} foi atualizado`;
    }
}
