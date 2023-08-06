import { Injectable } from '@nestjs/common';
// services are like the middlewares that will be getting the data from you like from database.
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hemmloo Bhai!';
  }
  getAmit(): string {
    return ' hello amit ';
  }
}
