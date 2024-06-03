import { IsNotEmpty } from "class-validator";

export class ICreatePostDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    image: string;
}