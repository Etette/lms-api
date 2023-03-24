import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}
  @Get()
  homePage() {
    return this.appService.homePage();
  }

  // @UseGuards(AuthGuard('local'))
  // @Post('auth/login')
  // async login (@Req() req) {
  //   return req.user;
  // }
}
