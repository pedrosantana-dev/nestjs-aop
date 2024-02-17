import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/first')
  firstMethod() {
    return this.appService.serviceOne();
  }

  @Get('/second')
  secondMethod() {
    return this.appService.serviceTwo();
  }
  @Get('/third')
  thirdMethod() {
    return this.appService.serviceThree();
  }

  @Get('/fourth')
  fourthMethod() {
    return this.appService.serviceFour();
  }
}
