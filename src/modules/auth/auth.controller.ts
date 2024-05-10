import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('log-in')
  logIn() {
    return this.authService.logIn();
  }

  @Post('sign-up')
  signUp() {
    return this.authService.signUp();
  }

  @Post('log-out')
  logOut() {
    return this.authService.logOut();
  }
}
