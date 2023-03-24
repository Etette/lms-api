import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsUrl } from 'class-validator';

export class UpdateAssignmentDTO {
  @ApiProperty()
  @IsNotEmpty()
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
  programmeId: number;
}
