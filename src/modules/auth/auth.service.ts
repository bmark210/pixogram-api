import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  logIn(): { msg: string } {
    return {
      msg: 'You are logged in!',
    };
  }

  signUp(): { msg: string } {
    return {
      msg: 'You are signed up!',
    };
  }

  logOut(): { msg: string } {
    return {
      msg: 'You are logged out!',
    };
  }
}
