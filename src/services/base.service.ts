import { IService } from 'src/interfaces/service.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseService implements IService {
  public sayHi(): string {
    return 'Hi from BaseService';
  }
}
