import { IHelperService } from 'src/interfaces/helper-service.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HelperService implements IHelperService {
  help() {
    return 'HelperService is helping';
  }
}
