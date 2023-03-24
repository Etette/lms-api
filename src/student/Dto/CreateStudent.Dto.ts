import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";
import { IsNotEmpty, IsString, IsStrongPassword } from "class-validator";
import { isActive } from "src/utils/enums";


export class CreateStudentDto {
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsStrongPassword()
    password: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    programme: string;

    
    // @IsNotEmpty()
    status: isActive;
}