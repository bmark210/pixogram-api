import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ILoginDto } from './interfaces';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}

    async login(body: ILoginDto) {
        console.log('body', body);
        
        return {
            message: 'login',
        }
        // this.prisma.user.findUnique({
        //     where: {
        //         email: body.email,
        //     },
        // });
    }

    async signup(body: any) {
        return await this.prisma.user.create({
            data: {
                firstName: body.name,
                email: body.email,
                hash: body.password,
            },
        })
    }
}
