import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';
import { RESOURCE_TYPE } from 'src/utils/enums';

export class UpdateResourceDTO {
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
  programmeId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(RESOURCE_TYPE)
  resourceType: RESOURCE_TYPE;
}
