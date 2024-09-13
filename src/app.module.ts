import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ServiceFactory } from './services/service.factory';
import { BaseService } from './services/base.service';
import { ClientService } from './services/client.service';
import { HelperService } from './services/helper.service';
import { ServiceInterceptor } from './interceptors/service.interceptor';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    ServiceFactory,
    BaseService,
    ClientService,
    HelperService,
    ServiceInterceptor,
  ],
})
export class AppModule {}
