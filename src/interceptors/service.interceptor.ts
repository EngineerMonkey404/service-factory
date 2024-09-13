import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { app } from 'src/main';
import { ServiceFactory } from 'src/services/service.factory';
import { Request } from 'express';
import { AVAILABLE_SERVICES } from 'src/interfaces/services.enum';

@Injectable()
export class ServiceInterceptor implements NestInterceptor {
  constructor(private readonly serviceFactory: ServiceFactory) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const httpCtx = context.switchToHttp();
    const serviceHeader = httpCtx
      .getRequest<Request>()
      .header('service') as AVAILABLE_SERVICES;
    app.get(context.getClass()).service =
      this.serviceFactory.getService(serviceHeader);

    return next.handle();
  }
}
