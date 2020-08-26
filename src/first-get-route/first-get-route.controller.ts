import { Request, Response } from 'express';
import { Controller, Get, Req, HttpModule, Res, Param, ParamDecoratorEnhancer } from '@nestjs/common';

@Controller('get')
export class FirstGetRouteController {
    @Get(":id")
    index(@Req() request:Request, @Res() response: Response, @Param() params:ParamDecoratorEnhancer, @Param('id') id:ParamDecoratorEnhancer):HttpModule{
        console.log(request.params.id, params['id'], id);
        return response.status(200).json({message:"hello World!"}); 
    }
}
