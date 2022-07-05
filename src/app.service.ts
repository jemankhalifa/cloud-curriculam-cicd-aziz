import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {


  healthCheck(): string {
    return 'App is healthy';
  }

  getHello(): string {
    return (
      '<h1>Hello !</h1>' +
      '<p>Deployed Successfully By : <b>Aziz</b> </p>' +
      '<p>Version : <b>1.0.0</b></p>'
    );
  }
}
