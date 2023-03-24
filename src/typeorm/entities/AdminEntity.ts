import { Column, Entity, BeforeInsert, OneToMany } from 'typeorm';
import { AnnouncementEntity } from './AnnouncementEntity';
import { BaseEntity } from './BaseEntity';
import { ProgrammeEntity } from './ProgrammeEntity';
import { TutorEntity } from './TutorEntity';
import * as bcrypt from 'bcryptjs';
import { isAdmin } from 'src/utils/enums';

@Entity('admins')
export class AdminEntity extends BaseEntity {
  @Column({ unique: true})
  email: string;

  @Column()
  password: string;

  @Column({nullable: true})
  firstname: string;

  @Column({nullable: true})
  middlename: string;

  @Column({nullable: true})
  lastname: string;

  @Column({
    nullable : true,
    type: 'enum',
    enum: isAdmin,
    default: isAdmin.NOT_ADMIN,
  })
  isAdmin: boolean;

  @BeforeInsert()
  async hashPassword() {
      this.password = await bcrypt.hash(this.password, 10);
  }

  async validatePassword(password: string): Promise<boolean> {
      return bcrypt.compare(password, this.password);
  }

  @OneToMany(() => AnnouncementEntity, (announcement) => announcement.admin)
  announcements: AnnouncementEntity[];

  @OneToMany(() => ProgrammeEntity, (programme) => programme.admin)
  programmes: ProgrammeEntity[];

  @OneToMany(() => TutorEntity, (tutor) => tutor.admin)
  tutors: TutorEntity[];
}
