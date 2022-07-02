import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return (
      '<h1>App is healthy</h1>' + 
      '<p>Deployed Successfully By : <b>Aziz</b> </p>' +
      '<p>Version : <b>1.0</b></p>'
      );
  }
}
