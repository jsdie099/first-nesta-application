import { Request, Response } from 'express';
import { Controller, Get, Req, HttpModule, Res } from '@nestjs/common';

@Controller('get')
export class FirstGetRouteController {
    @Get(":id")
    index(@Req() request:Request, @Res() response: Response):HttpModule{
        console.log(request.params.id);
        return response.status(200).json({message:"hello World!"}); 
    }
}
