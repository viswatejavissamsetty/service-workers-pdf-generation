import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('fibonacci')
  fibonacci(@Query('value', new ParseIntPipe()) n: number) {
    return this.appService.calculateFibonacciPiscina(n);
  }
}
