import {
  Controller,
  Get,
  Headers,
  Param,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { ServiceFactory } from './services/service.factory';
import { AVAILABLE_SERVICES } from './interfaces/services.enum';
import { IService } from './interfaces/service.interface';
import { ApiHeader } from '@nestjs/swagger';
import { ServiceInterceptor } from './interceptors/service.interceptor';

@Controller()
export class AppController {
  constructor(private readonly serviceFactory: ServiceFactory) {}
  service: IService;

  @ApiHeader({
    name: 'service',
    description: 'service header',
  })
  @Get('/factory')
  getHelloFactory(@Headers('service') service: AVAILABLE_SERVICES): string {
    return this.serviceFactory.getService(service).sayHi();
  }

  @ApiHeader({
    name: 'service',
    description: 'service header',
  })
  @UseInterceptors(ServiceInterceptor)
  @Get('/intercept')
  getHelloInterceptor(@Headers('service') service: AVAILABLE_SERVICES): string {
    return this.service.sayHi();
  }
}
