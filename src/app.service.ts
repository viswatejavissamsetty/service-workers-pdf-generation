import { Injectable } from '@nestjs/common';
import { resolve } from 'path';
import { Piscina } from 'piscina';
import * as PDFDocument from 'pdfkit';

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

  createPDF() {
    const doc = new PDFDocument({
      size: 'A4',
      bufferPages: true,
      layout: 'portrait',
      userPassword: '1234',
    });

    doc.image(resolve(__dirname, 'assets/mainpage.jpg'), 0, 0, {
      width: doc.page.width,
      height: doc.page.height,
    });

    doc
      .fontSize(32)
      .fillColor('#ff0000')
      .fillOpacity(0.9)
      .text('hello world', 100, 150, {});

    doc.addPage();

    doc.image(resolve(__dirname, 'assets/otherpages.jpg'), 0, 0, {
      width: doc.page.width,
      height: doc.page.height,
    });

    doc.addPage();

    doc.image(resolve(__dirname, 'assets/otherpages.jpg'), 0, 0, {
      width: doc.page.width,
      height: doc.page.height,
    });

    doc.addPage();

    doc.image(resolve(__dirname, 'assets/otherpages.jpg'), 0, 0, {
      width: doc.page.width,
      height: doc.page.height,
    });

    doc.end();

    return doc;
  }
}
