import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AssignmentEntity } from 'src/typeorm/entities/AssignmentEntity';
import { Repository } from 'typeorm';

@Injectable()
export class AssignmentsService {
  constructor(
    @InjectRepository(AssignmentEntity)
    private assignmentRepository: Repository<AssignmentEntity>,
  ) {}

  showAssignmentsForStudent() {
    //order by deadline date
    //load submission relation
  }
}
