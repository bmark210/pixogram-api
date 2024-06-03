
import { User } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { UserService } from './user.service';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { Users } from '@prisma/client';

@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('me')
  getMe(@User() user: Users) {
    return user;
  }
}
