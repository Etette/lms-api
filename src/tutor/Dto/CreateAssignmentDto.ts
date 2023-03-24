import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateAssignmentDTO {
  @ApiProperty()
  @IsString()
  task: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUrl()
  link: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  deadline: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  tutorId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  programmeId: number;
}
