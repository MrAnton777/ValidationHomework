import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InterceptorModule } from './interceptor/interceptor.module';
import { PipeModule } from './pipe/pipe.module';

@Module({
  imports: [InterceptorModule, PipeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
