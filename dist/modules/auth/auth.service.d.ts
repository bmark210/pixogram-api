import { PrismaService } from '../prisma/prisma.service';
import { ISignInDto, ISignupDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    signIn(body: ISignInDto): Promise<{
        access_token: string;
    }>;
    signUp(body: ISignupDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        hash: string;
        userName: string;
        fullName: string;
    }>;
    signToken(userId: number, email: string): Promise<{
        access_token: string;
    }>;
}
