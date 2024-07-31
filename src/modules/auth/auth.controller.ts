import { AuthService } from './auth.service';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ISignInDto, ISignupDto } from './dto';

@Controller('auth')
export class AuthController {
    constructor(private AuthService: AuthService) {}
    @Post('signin')
    signIn(@Body() body: ISignInDto, @Res() res: Response) {
        return this.AuthService.signIn(body, res);
    }

    @Post('signup')
    signUp(@Body() body: ISignupDto) {
        return this.AuthService.signUp(body);
    }
}
