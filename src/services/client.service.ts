import { IHelperService } from 'src/interfaces/helper-service.interface';
import { IService } from 'src/interfaces/service.interface';
import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { HelperService } from './helper.service';

@Injectable()
export class ClientService implements IService {
  constructor(private readonly helperService: HelperService) {}
  public sayHi(): string {
    return 'Hi from ClientService.' + this.helperService.help();
  }
}
