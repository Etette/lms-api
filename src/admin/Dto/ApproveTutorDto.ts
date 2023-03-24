import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class ApproveTutorDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
