import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AssignmentsSubmissionService } from 'src/tutor/service/assignments_submission/assignments_submission.service';

@Controller()
export class AssignmentsSubmissionController {
  constructor(
    private assignmentsSubmissionService: AssignmentsSubmissionService,
  ) {}

  @Get('submittedAssignments/:assignmentId')
  getSubmissions(@Param('assignmentId', ParseIntPipe) assignmentId: number) {
    this.assignmentsSubmissionService.getSubmittedAssignments(assignmentId);
  }
}
