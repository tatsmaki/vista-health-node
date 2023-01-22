import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  checkStatus(): string {
    return 'ok';
  }
}
