import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { ISignInDto, ISignupDto } from './dto';

@Controller('auth')
export class AuthController {
    constructor(private AuthService: AuthService) {}
    @Post('signin')
    signIn(@Body() body: ISignInDto) {
        return this.AuthService.signIn(body);
    }

    @Post('signup')
    signUp(@Body() body: ISignupDto) {
        return this.AuthService.signUp(body);
    }
}
