import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
  } from '@nestjs/common';
  import { CreateAssignmentSubmissionDTO } from 'src/student/Dto/CreateAssignmentSubmissionDto';
  import { UpdateAssignmentSubmissionDTO } from 'src/student/Dto/UpdateAssignmentSubmissionDTO';
  import { AssignmentsSubmissionService } from 'src/student/service/assignments_submission/assignments_submission';
  
  @Controller('assignments-submission')
  export class AssignmentsSubmissionController {
    constructor(
      private assignmentSubmissionService: AssignmentsSubmissionService,
    ) {}
  
    @Get()
    showSubmittedAssignments() {
      return this.assignmentSubmissionService.showSubmittedAssignments();
    }
  
    @Post('submit')
    submitAssignment(@Body() submitAssignmentDTO: CreateAssignmentSubmissionDTO) {
      return this.assignmentSubmissionService.submitAssignment({
        ...submitAssignmentDTO,
      });
    }
  
    @Put('update/:id')
    updateAssignmentSubmission(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateAssignmentDTO: UpdateAssignmentSubmissionDTO,
    ) {
      return this.assignmentSubmissionService.updateAssignmentSubmission(id, {
        ...updateAssignmentDTO,
      });
    }
  
    @Delete('delete/:id')
    deleteAssignmentSubmission(@Param('id', ParseIntPipe) id: number) {
      return this.assignmentSubmissionService.deleteAssignmentSubmission(id);
    }
  }
  