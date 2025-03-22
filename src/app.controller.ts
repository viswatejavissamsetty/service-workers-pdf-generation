import {
  Controller,
  Get,
  Header,
  ParseIntPipe,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
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

  @Get('pdf')
  @Header('Response-Type', 'application/pdf')
  generatePDF(@Res() res: Response) {
    const pdf = this.appService.createPDF();
    return pdf.pipe(res);
  }
}
