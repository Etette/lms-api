import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tutorController } from 'src/admin/controllers/tutor/tutor.controller';
import { studentController } from 'src/admin/controllers/student/student.controller';
import { ProgrammesController } from './controllers/programmes/programmes.controller';
import { AnnouncementsController } from './controllers/announcements/announcements.controller';
import { AnnouncementsService } from './services/announcements/announcements.service';
import { ProgrammesService } from './services/programmes/programmes.service';
import { ProfileService } from 'src/student/service/profile/profile.service';
import { TutorService } from 'src/tutor/service/profile/tutor.service';
import { ProgrammeEntity } from 'src/typeorm/entities/ProgrammeEntity';
import { AnnouncementEntity } from 'src/typeorm/entities/AnnouncementEntity';
import { TutorEntity } from 'src/typeorm/entities/TutorEntity';
import { StudentEntity } from 'src/typeorm/entities/StudentEntity';
import { AuthController } from 'src/auth/auth.controller';
import { AuthService } from 'src/auth/auth.service';
import { AdminService } from './services/profile/adminProfile.service';
import { adminController } from './controllers/profile/adminProfile.controller';
import { JwtService } from '@nestjs/jwt';
import { AdminEntity } from 'src/typeorm/entities/AdminEntity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProgrammeEntity,
      AnnouncementEntity,
      TutorEntity,
      StudentEntity,
      AdminEntity,
    ]),
  ],
  controllers: [
    tutorController,
    studentController,
    ProgrammesController,
    AnnouncementsController,
    AuthController,
    adminController,
  ],
  providers: [
    AnnouncementsService,
    ProgrammesService,
    ProfileService,
    TutorService,
    AuthService,
    AdminService,
    JwtService,
  ],
})
export class AdminModule {}
