import { Controller, UseInterceptors } from '@nestjs/common';
import { Interceptor } from './interceptor.interceptor';
import { Param,Get,Post} from '@nestjs/common';
import { InterceptorService } from './interceptor.service';


@Controller('interceptor')
@UseInterceptors(Interceptor)
export class InterceptorController {
    constructor(private readonly interceptorService:InterceptorService){}

    @Get('/:data')
    getData(@Param() data:Object):Object{
        return this.interceptorService.getData(data)
    }
}
