import { Column, Entity, ManyToOne } from 'typeorm';
import { AssignmentEntity } from './AssignmentEntity';
import { BaseEntity } from './BaseEntity';
import { StudentEntity } from './StudentEntity';

@Entity('assignment_submissions')
export class AssignmentSubmissionEntity extends BaseEntity {
  @Column()
  submissionDate: Date;

  @Column()
  link: string;

  @ManyToOne(() => StudentEntity, (student) => student.submittedAssignments)
  student: StudentEntity;

  @ManyToOne(
    () => AssignmentEntity,
    (assignment) => assignment.assignmentSubmissions,
  )
  assignment: AssignmentEntity;

  // Set up relations with student, programme/cohort
}
