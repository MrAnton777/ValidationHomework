import { Controller, UseInterceptors } from '@nestjs/common';
import { Interceptor } from './interceptor.interceptor';
import { Param,Get,Post} from '@nestjs/common';



@Controller('interceptor')
@UseInterceptors(Interceptor)
export class InterceptorController {
    constructor(){}

    @Get('/:data')
    getData(@Param() data:Object):Object{
        return data
    }
}
