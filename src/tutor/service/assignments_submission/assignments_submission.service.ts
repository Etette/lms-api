import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AssignmentSubmissionEntity } from 'src/typeorm/entities/AssignmentSubmissionEntity';
import { Repository } from 'typeorm';

@Injectable()
export class AssignmentsSubmissionService {
  constructor(
    @InjectRepository(AssignmentSubmissionEntity)
    private assignmentSubmissionRepository: Repository<AssignmentSubmissionEntity>,
  ) {}

  getSubmittedAssignments(assignmentId: number) {
    const submittedAssignments = this.assignmentSubmissionRepository
      .createQueryBuilder('submissions')
      .select('assignment')
      .where('assignment.id = :assignmentId', { assignmentId: assignmentId })
      .getMany();

    return submittedAssignments;
  }
}
