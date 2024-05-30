import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { ILoginDto, ISignupDto } from './interfaces';

@Controller('auth')
export class AuthController {
    constructor(private AuthService: AuthService) {}
    @Post('login')
    login(@Body() body: ILoginDto) {
        return this.AuthService.login(body);
    }

    @Post('signup')
    signup(@Body() body: ISignupDto) {
        return this.AuthService.signup(body);
    }
}
