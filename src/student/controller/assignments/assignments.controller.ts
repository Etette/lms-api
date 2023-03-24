import { Controller, Get } from '@nestjs/common';
import { AssignmentsService } from 'src/student/service/assignments/assignments.service';

@Controller('assignments')
export class AssignmentsController {
  constructor(private assignmentService: AssignmentsService) {}

  @Get()
  showAssignments() {
    return this.assignmentService.showAssignmentsForStudent();
  }
}
