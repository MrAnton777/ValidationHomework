import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InterceptorModule } from './interceptor/interceptor.module';

@Module({
  imports: [InterceptorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
