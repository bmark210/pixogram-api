import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ISignInDto, ISignupDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signIn(body: ISignInDto) {
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
    return this.signToken(user.id, user.email);
  }

  async signUp(body: ISignupDto) {
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
      }
      throw error;
    }
  }

  async signToken(userId: number, email: string): Promise<{ access_token: string }> {
    const secret = this.config.get('JWT_SECRET');

    const payload = {
      sub: userId,
      email,
    };

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret,
    });

    return {
      access_token: token
    };
  }
}
