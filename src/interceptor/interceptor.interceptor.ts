import { CallHandler,Injectable,NestInterceptor,ExecutionContext } from "@nestjs/common";

import { Reflector ,} from "@nestjs/core";
import { Observable ,pipe,map,of,catchError} from "rxjs";

@Injectable()
export class Interceptor implements NestInterceptor{
    constructor(private readonly reflector: Reflector){}

    public intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
        return next.handle().pipe(map(data =>({status:"success",data:data})),catchError(err=> of({status:'fail',data:err})))
    }
}