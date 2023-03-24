import { PROGRAMME_APPLICATION_STATUS } from 'src/utils/enums';
import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { ProgrammeEntity } from './ProgrammeEntity';
import { StudentEntity } from './StudentEntity';

@Entity('programme_applications')
export class ProgrammeApplicationEntity extends BaseEntity {
  @Column({
    type: 'enum',
    enum: PROGRAMME_APPLICATION_STATUS,
    default: PROGRAMME_APPLICATION_STATUS.PENDING,
  })
  applicationStatus: PROGRAMME_APPLICATION_STATUS;

  @ManyToOne(() => StudentEntity, (students) => students.applications)
  student: StudentEntity;

  @ManyToOne(() => ProgrammeEntity, (programme) => programme.applications)
  programme: ProgrammeEntity;
}
