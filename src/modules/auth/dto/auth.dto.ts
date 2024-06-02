import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class ISignInDto {
    @IsEmail()
    @IsNotEmpty()
    identifier: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}

export class ISignupDto {
    @IsNotEmpty()
    @IsString()
    userName: string;

    fullName?: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}