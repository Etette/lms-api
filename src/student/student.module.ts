import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResourcesController } from 'src/student/controller/resources/resources.controller';
import { AnnouncementsController } from 'src/student/controller/announcements/announcements.controller';
import { AssignmentsController } from 'src/student/controller/assignments/assignments.controller';
import { AssignmentsSubmissionController } from 'src/student/controller/assignments_submission/assignments_submission.controller';
import { ProfileController } from 'src/student/controller/profile/profile.controller';
import { AnnouncementsService } from 'src/student/service/announcements/announcements.service';
import { AssignmentsService } from 'src/student/service/assignments/assignments.service';
import { ProfileService } from 'src/student/service/profile/profile.service';
import { ResourcesService } from 'src/student/service/resources/resources.service';
import { AssignmentsSubmissionService } from 'src/student/service/assignments_submission/assignments_submission';
import { ResourceEntity } from 'src/typeorm/entities/ResourceEntity';
import { AnnouncementEntity } from 'src/typeorm/entities/AnnouncementEntity';
import { AssignmentEntity } from 'src/typeorm/entities/AssignmentEntity';
import { AssignmentSubmissionEntity } from 'src/typeorm/entities/AssignmentSubmissionEntity';
import { StudentEntity } from 'src/typeorm/entities/StudentEntity';
import { AuthController } from 'src/auth/auth.controller';
import { AuthService } from 'src/auth/auth.service';
import { AdminService } from 'src/admin/services/profile/adminProfile.service';
import { JwtService } from '@nestjs/jwt';
import { AdminEntity } from 'src/typeorm/entities/AdminEntity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ResourceEntity,
      AnnouncementEntity,
      AssignmentEntity,
      AssignmentSubmissionEntity,
      StudentEntity,
      AdminEntity,
    ]),
  ],
  controllers: [
    ResourcesController,
    AnnouncementsController,
    AssignmentsController,
    AssignmentsSubmissionController,
    ProfileController,
    AuthController,
  ],
  providers: [
    AnnouncementsService,
    AssignmentsService,
    ProfileService,
    ResourcesService,
    AssignmentsSubmissionService,
    AuthService,
    AdminService,
    JwtService,
  ],
})
export class StudentModule {}
