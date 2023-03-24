import { IsNotEmpty, IsUrl } from 'class-validator';

export class CreateAssignmentSubmissionDTO {
  @IsNotEmpty()
  @IsUrl()
  link: string;
}
