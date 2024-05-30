import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ILoginDto, ISignupDto } from './interfaces';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async login(body: ILoginDto) {

    // find user by email
    const user = await this.prisma.users.findFirst({
      where: {
        OR: [{ userName: body.identifier }, { email: body.identifier }],
      },
    });

    // if user does not exist throw exception
    if (!user) throw new ForbiddenException('Credentials incorrect');

    // compare password
    const pwMatches = await argon.verify(user.hash, body.password);
    // if password incorrect throw exception
    if (!pwMatches) throw new ForbiddenException('Credentials incorrect');
    
    delete user.hash
    
    return user;
  }

  async signup(body: ISignupDto) {
    try {
      // generate the hash
      const hash = await argon.hash(body.password);

      // save new user in db
      const user = await this.prisma.users.create({
        data: {
          userName: body.userName,
          fullName: body.fullName,
          email: body.email,
          hash,
        },
      });

      delete user.hash;

      // return saved user
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      } throw error;
    }
  }
}
