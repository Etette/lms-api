import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AssignmentSubmissionEntity } from 'src/typeorm/entities/AssignmentSubmissionEntity';
import {
  CreateAssignmentSubmissionParams,
  UpdateAssignmentSubmissionParams,
} from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class AssignmentsSubmissionService {
  constructor(
    @InjectRepository(AssignmentSubmissionEntity)
    private assignmentSubmissionRepository: Repository<AssignmentSubmissionEntity>,
  ) {}

  async showSubmittedAssignments() {
    //get all submitted assignments, order by date of submission
    const submittedAssignments = await this.assignmentSubmissionRepository.find(
      { where: {} },
    );

    return { submittedAssignments: submittedAssignments };
  }

  submitAssignment(
    assignmentSubmissionDetails: CreateAssignmentSubmissionParams,
  ) {
    const assignmentSubmission = this.assignmentSubmissionRepository.create({
      ...assignmentSubmissionDetails,
    });

    this.assignmentSubmissionRepository.save(assignmentSubmission);

    return assignmentSubmission;
  }

  updateAssignmentSubmission(
    id: number,
    updateAssignmentSubmissionDetails: UpdateAssignmentSubmissionParams,
  ) {
    return this.assignmentSubmissionRepository.update(
      { id: id },
      { ...updateAssignmentSubmissionDetails },
    );
  }

  deleteAssignmentSubmission(id: number) {
    return this.assignmentSubmissionRepository.delete({ id: id });
  }
}
