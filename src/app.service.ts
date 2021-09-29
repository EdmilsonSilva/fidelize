import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { msg: string; status: number } {
    return { msg: 'Hello World!', status: 200 };
  }
}
