import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProgrammeEntity } from 'src/typeorm/entities/ProgrammeEntity';
import { CreateProgrammeParams, UpdateProgrammeParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class ProgrammesService {
  constructor(
    @InjectRepository(ProgrammeEntity)
    private ProgrammeRepository: Repository<ProgrammeEntity>,
  ) {}

  getAllProgrammes() {
    return this.ProgrammeRepository.find();
  }

  createProgramme(createProgrammeDetails: CreateProgrammeParams) {
    const newProgramme = this.ProgrammeRepository.create({
      ...createProgrammeDetails,
    });
    return this.ProgrammeRepository.save(newProgramme);
  }

  updateProgramme(id: number, updateProgrammeDetails: UpdateProgrammeParams) {
    return this.ProgrammeRepository.update(
      { id },
      { ...updateProgrammeDetails },
    );
  }

  deleteProgramme(id: number) {
    return this.ProgrammeRepository.delete({ id });
  }
}
