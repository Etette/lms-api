import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsUrl, IsDate, IsEnum } from 'class-validator';
import { ProgrammeStatus } from 'src/utils/enums';

export class UpdateProgrammeDTO {
  @ApiProperty()
  @IsString()
  // @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  // @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsUrl()
  // @IsNotEmpty()
  linkToFlier: string;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  applicationDeadline: Date;

  @ApiProperty()
  @IsEnum(ProgrammeStatus)
  status: ProgrammeStatus;
}
