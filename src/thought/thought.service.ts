import { Injectable } from '@nestjs/common';

@Injectable()
export class ThoughtService {
  getHello(): string {
    return 'Hello World!';
  }
}
