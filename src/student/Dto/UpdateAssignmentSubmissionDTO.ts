import { IsNotEmpty, IsUrl } from 'class-validator';

export class UpdateAssignmentSubmissionDTO {
  @IsNotEmpty()
  @IsUrl()
  link: string;
}
