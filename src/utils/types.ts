import { ProgrammeStatus, RESOURCE_TYPE, isActive } from './enums';

export type CreateAnnouncementParams = {
  title: string;
  content: string;
  programmeId: number;
  tutorId: number;
  adminId: number;
};

export type UpdateAnnouncementParams = {
  title: string;
  content: string;
};

export type CreateProgrammeParams = {
  title: string;
  description: string;
  linkToFlier: string;
  applicationDeadline: Date;
  adminId: number;
};

export type UpdateProgrammeParams = {
  title: string;
  description: string;
  linkToFlier: string;
  applicationDeadline: Date;
  status: ProgrammeStatus;
};

export type CreateAdminParams = {
  email: string;
  password: string;
}

export type UpdateAdminParams = {
  firstname: string;
  middlename: string;
  lastname: string;
}

export type CreateStudentParams = {
  email: string;
  password: string;
  programme: string;
  status: isActive;
};

export type UpdateStudentParams = {
  firstname: string;
  middlename: string;
  lastname: string;
};

export type CreateAssignmentSubmissionParams = { link: string };

export type UpdateAssignmentSubmissionParams = { link: string };

export type CreateResourceParams = {
  title: string;
  description: string;
  link: string;
  tutorId: number;
  resourceType: RESOURCE_TYPE;
};

export type UpdateResourceParams = {
  title: string;
  description: string;
  link: string;
  resourceType: RESOURCE_TYPE;
};

export type CreateAssignmentParams = {
  deadline: Date;
  task: string;
  link: string;
  tutorId: number;
  programmeId: number;
};

export type UpdateAssignmentParams = {
  deadline: Date;
  link: string;
  programmeId: number;
};

export type CreateTutorParams = { email: string, password: string };

export type UpdateTutorParams = {
  firstname: string;
  middlename: string;
  lastname: string;
  // course: string;
};
