import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService) {}
    async getUserById(id: number) {
        const user = await this.prisma.users.findUnique({
            where: {
                id: id
            }
        })

        if (!user) {
            throw new Error('User not found')
        }
        delete user.hash
        return user
    }

    async getUserByEmail(email: string) {
        const user =  await this.prisma.users.findUnique({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new Error('User not found')
        }
        delete user.hash
        return user
    }
}
