import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class ILoginDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}

export interface ISignupDto {
    name: string;
    email: string;
    password: string;
}