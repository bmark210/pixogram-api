import { AuthService } from './auth.service';
import { ISignInDto, ISignupDto } from './dto';
export declare class AuthController {
    private AuthService;
    constructor(AuthService: AuthService);
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
}
