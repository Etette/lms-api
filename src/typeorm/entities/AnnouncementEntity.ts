import { Column, Entity, ManyToOne } from 'typeorm';
import { AdminEntity } from './AdminEntity';
import { BaseEntity } from './BaseEntity';
import { ProgrammeEntity } from './ProgrammeEntity';
import { TutorEntity } from './TutorEntity';

@Entity('announcements')
export class AnnouncementEntity extends BaseEntity {
  @Column({ type: 'text'})
  title: string;

  @Column({ type: 'text' })
  content: string;

  @ManyToOne(() => ProgrammeEntity, (programme) => programme.announcements)
  programme: ProgrammeEntity;

  @ManyToOne(() => TutorEntity, (tutor) => tutor.announcements, {
    nullable: true,
  })
  tutor: TutorEntity;

  @ManyToOne(() => AdminEntity, (admin) => admin.announcements, {
    nullable: true,
  })
  admin: AdminEntity;
}
