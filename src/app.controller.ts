import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { Request as Req } from 'express';

import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { Public } from './auth/constants';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) { }

  @Public()
  @Post('auth/login')
  async login(@Request() req: Req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
  
  @Get()
  getHello(): { msg: string; status: number } {
    return this.appService.getHello();
  }
}
