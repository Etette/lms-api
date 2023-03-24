import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { AssignmentSubmissionEntity } from './AssignmentSubmissionEntity';
import { BaseEntity } from './BaseEntity';
import { ProgrammeEntity } from './ProgrammeEntity';
import { TutorEntity } from './TutorEntity';

@Entity('assignments')
export class AssignmentEntity extends BaseEntity {
  @Column()
  deadline: Date;

  @Column()
  task: string;

  @Column()
  link: string;

  @ManyToOne(() => TutorEntity, (tutor) => tutor.assignments)
  tutor: TutorEntity;

  @ManyToOne(() => ProgrammeEntity, (programme) => programme.assignments)
  programme: ProgrammeEntity;

  @OneToMany(
    () => AssignmentSubmissionEntity,
    (assignmentSubmission) => assignmentSubmission.assignment,
  )
  assignmentSubmissions: AssignmentSubmissionEntity[];
}
