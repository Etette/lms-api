import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";


export class UpdateTutorDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    firstname: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    middlename: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    lastname: string;

    // @ApiProperty()
    // @IsNotEmpty()
    // @IsString()
    // course: string;

    // @ApiProperty()
    // programmeId: bigint;

    // @ApiProperty()
    // @IsOptional()
    // adminId: bigint;
}