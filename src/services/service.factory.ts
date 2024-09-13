import { forwardRef, Injectable, Inject } from '@nestjs/common';
import { IService } from 'src/interfaces/service.interface';
import { AVAILABLE_SERVICES } from 'src/interfaces/services.enum';
import { BaseService } from './base.service';
import { ClientService } from './client.service';

@Injectable()
export class ServiceFactory {
  constructor(
    private readonly baseService: BaseService,
    private readonly clientService: ClientService,
  ) {}
  public getService(service: AVAILABLE_SERVICES): IService {
    switch (service) {
      case AVAILABLE_SERVICES.BASE:
        return this.baseService;
      case AVAILABLE_SERVICES.CLIENT:
        return this.clientService;
      default:
        throw new Error(`No service defined for the context: "${service}"`);
    }
  }
}
