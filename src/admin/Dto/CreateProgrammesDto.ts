import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { ProgrammeStatus } from 'src/utils/enums';

export class CreateProgrammeDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsUrl()
  @IsNotEmpty()
  linkToFlier: string;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  applicationDeadline: Date;

  @ApiProperty()
  @IsEnum(ProgrammeStatus)
  status: ProgrammeStatus;

  @ApiProperty()
  @IsOptional()
  adminId: number;
}
