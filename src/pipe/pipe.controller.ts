import { Body, Controller ,Get,Param, Post, UsePipes} from '@nestjs/common';
import { PipeService } from './pipe.service';
import { JoiValidationPipe } from './validation/joi.validation';
import { book_schema } from './validation/schemas/joi.schema';
import { book_dto } from './dto/book_dto';

@Controller('pipe')
export class PipeController {
    constructor(){}

    @UsePipes(new JoiValidationPipe(book_schema))
    @Post()
    validation(@Body() book:book_dto){
        return book
    }
    
}
