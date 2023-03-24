import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssignmentsController } from './controllers/assignments/assignments.controller';
import { ResourcesController } from './controllers/resources/Resource.controller';
import { studentController } from 'src/tutor/controllers/student/student.controller';
import { TutorController } from 'src/tutor/controllers/profile/tutorProfile.controller';
import { AnnouncementsController } from './controllers/announcements/announcements.controller';
import { AssignmentsSubmissionService } from 'src/tutor/service/assignments_submission/assignments_submission.service';
import { AssignmentsService } from 'src/tutor/service/assignments/assignments.service';
import { AnnouncementsService } from 'src/tutor/service/announcements/announcements.service';
import { ResourcesService } from 'src/tutor/service/resources/resources.service';
import { TutorService } from 'src/tutor/service/profile/tutor.service';
import { ProfileService } from 'src/student/service/profile/profile.service';
import { AssignmentsSubmissionController } from 'src/tutor/controllers/assignments_submission/assignments_submission';
import { AssignmentEntity } from 'src/typeorm/entities/AssignmentEntity';
import { AssignmentSubmissionEntity } from 'src/typeorm/entities/AssignmentSubmissionEntity';
import { ResourceEntity } from 'src/typeorm/entities/ResourceEntity';
import { AnnouncementEntity } from 'src/typeorm/entities/AnnouncementEntity';
import { StudentEntity } from 'src/typeorm/entities/StudentEntity';
import { TutorEntity } from 'src/typeorm/entities/TutorEntity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AssignmentEntity,
      AssignmentSubmissionEntity,
      ResourceEntity,
      AnnouncementEntity,
      StudentEntity,
      TutorEntity,
    ]),
  ],
  controllers: [
    AssignmentsController,
    AssignmentsSubmissionController,
    ResourcesController,
    TutorController,
    studentController,
    AnnouncementsController,
  ],
  providers: [
    AssignmentsSubmissionService,
    AssignmentsService,
    AnnouncementsService,
    ResourcesService,
    TutorService,
    ProfileService,

  ],
})
export class TutorModule {}
