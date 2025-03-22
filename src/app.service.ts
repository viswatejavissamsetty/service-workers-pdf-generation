import { Injectable } from '@nestjs/common';
import { resolve } from 'path';
import { Piscina } from 'piscina';

@Injectable()
export class AppService {
  fibPicina = new Piscina({
    filename: resolve(__dirname, 'fibonacci.worker.pascina.js'),
  });

  getHello(): string {
    return 'Hello World!';
  }

  calculateFibonacciPiscina(n: number): Promise<number> {
    const result = this.fibPicina.run(n);
    return result;
  }
}
