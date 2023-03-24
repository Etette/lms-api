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
  import { ApiOkResponse } from '@nestjs/swagger';
  import { CreateAssignmentDTO } from 'src/tutor/Dto/CreateAssignmentDTO';
  import { UpdateAssignmentDTO } from 'src/tutor/Dto/UpdateAssignmentDTO';
  import { AssignmentsService } from 'src/tutor/service/assignments/assignments.service';
  import { AssignmentEntity } from 'src/typeorm/entities/AssignmentEntity';
  
  @Controller('assignments')
  export class AssignmentsController {
    constructor(private assignmentService: AssignmentsService) {}
  
    @Get()
    @ApiOkResponse({ status: 200, type: AssignmentEntity, isArray: true })
    getAllAssignments() {
      return this.assignmentService.getAllAssignments();
    }
  
    @Post('create')
    async createAssignment(@Body() createAssignmentDTO: CreateAssignmentDTO) {
      return await this.assignmentService.createAssignment({
        ...createAssignmentDTO,
      });
    }
  
    @Put('update/:id')
    updateAssignment(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateAssignmentDTO: UpdateAssignmentDTO,
    ) {
      return this.assignmentService.updateAssignment(id, {
        ...updateAssignmentDTO,
      });
    }
  
    @Delete('delete/:id')
    deleteAssignment(@Param('id', ParseIntPipe) id: number) {
      this.assignmentService.deleteAssignment(id);
    }
  }
  