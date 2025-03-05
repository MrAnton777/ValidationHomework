import { Injectable } from '@nestjs/common';

@Injectable()
export class InterceptorService {
    public getData(data:Object):Object{
        return data
    }
}
