import { UserService } from './user.service';
import { Users } from '@prisma/client';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getMe(user: Users): {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        hash: string;
        userName: string;
        fullName: string;
    };
}
