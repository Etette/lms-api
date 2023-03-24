import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { TutorModule } from './tutor/tutor.module';
import { AdminEntity } from './typeorm/entities/AdminEntity';
import { AnnouncementEntity } from './typeorm/entities/AnnouncementEntity';
import { AssignmentEntity } from './typeorm/entities/AssignmentEntity';
import { AssignmentSubmissionEntity } from './typeorm/entities/AssignmentSubmissionEntity';
import { ProgrammeApplicationEntity } from './typeorm/entities/ProgrammeApplicationEntity';
import { ProgrammeEntity } from './typeorm/entities/ProgrammeEntity';
import { ResourceEntity } from './typeorm/entities/ResourceEntity';
import { StudentEntity } from './typeorm/entities/StudentEntity';
import { TutorEntity } from './typeorm/entities/TutorEntity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    RouterModule.register([
      { path: 'admin', module: AdminModule },
      { path: 'student', module: StudentModule },
      { path: 'tutor', module: TutorModule },
      { path: 'auth', module: AuthModule},
    ]),

    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: configService.get<TypeOrmModuleOptions>('DB_TYPE', {
          infer: true,
        }),
        host: configService.get<string>('DB_HOST'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        port: configService.get<string>('DB_PORT'),
        database: configService.get<string>('DB_NAME'),
        entities: [
          AdminEntity,
          AnnouncementEntity,
          AssignmentEntity,
          AssignmentSubmissionEntity,
          ProgrammeEntity,
          ResourceEntity,
          StudentEntity,
          TutorEntity,
          ProgrammeApplicationEntity,
        ],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    AdminModule,
    StudentModule,
    TutorModule,
    TypeOrmModule.forFeature([ProgrammeEntity, StudentEntity]),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
