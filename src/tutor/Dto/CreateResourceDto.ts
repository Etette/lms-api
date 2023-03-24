import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUrl, IsString, IsNumber, IsEnum } from 'class-validator';
import { RESOURCE_TYPE } from 'src/utils/enums';

export class CreateResourceDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUrl()
  link: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  tutorId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  programmeId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(RESOURCE_TYPE)
  resourceType: RESOURCE_TYPE;
}
