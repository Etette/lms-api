import { BeforeInsert, Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { AdminEntity } from './AdminEntity';
import { AnnouncementEntity } from './AnnouncementEntity';
import { AssignmentEntity } from './AssignmentEntity';
import { BaseEntity } from './BaseEntity';
import { ProgrammeEntity } from './ProgrammeEntity';
import { ResourceEntity } from './ResourceEntity';
import * as bcrypt from 'bcryptjs';
import { isTutor } from 'src/utils/enums';

@Entity('tutors')
export class TutorEntity extends BaseEntity {
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({nullable: true})
  firstname: string;

  @Column({nullable: true})
  middlename: string;

  @Column({nullable: true})
  lastname: string;

  // @Column({nullable: true})
  // course: string;

  @Column({
    nullable: true,
    type: 'enum',
    enum: isTutor,
    default: isTutor.NOT_TUTOR,
  })
  isTutor: boolean;

  @BeforeInsert()
  async hashPassword() {
      this.password = await bcrypt.hash(this.password, 10);
  }

  async validatePassword(password: string): Promise<boolean> {
      return bcrypt.compare(password, this.password);
  }

  @OneToMany(() => ResourceEntity, (resources) => resources.tutor)
  resources: ResourceEntity[];

  @ManyToOne(() => ProgrammeEntity, (programme) => programme.tutors, {
    nullable: true,
  })
  programme: ProgrammeEntity;

  @OneToMany(() => AssignmentEntity, (assignment) => assignment.tutor)
  assignments: AssignmentEntity[];

  @OneToMany(() => AnnouncementEntity, (announcement) => announcement.tutor)
  announcements: AnnouncementEntity[];

  @ManyToOne(() => AdminEntity, (admin) => admin.tutors)
  admin: AdminEntity;
}
