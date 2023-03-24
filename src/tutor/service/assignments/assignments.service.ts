import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AssignmentEntity } from 'src/typeorm/entities/AssignmentEntity';
import {
  CreateAssignmentParams,
  UpdateAssignmentParams,
} from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class AssignmentsService {
  constructor(
    @InjectRepository(AssignmentEntity)
    private assignmentRepository: Repository<AssignmentEntity>,
  ) {}
  getAllAssignments() {
    return this.assignmentRepository.find({
      relations: { assignmentSubmissions: true },
    });
  }

  createAssignment(createAssignmentDetails: CreateAssignmentParams) {
    const newAssignment = this.assignmentRepository.create({
      ...createAssignmentDetails,
    });
    return this.assignmentRepository.save(newAssignment);
  }

  updateAssignment(
    id: number,
    updateAssignmentDetails: UpdateAssignmentParams,
  ) {
    return this.assignmentRepository.update(
      { id },
      { ...updateAssignmentDetails },
    );
  }

  deleteAssignment(id: number) {
    return this.assignmentRepository.delete({ id });
  }
}
