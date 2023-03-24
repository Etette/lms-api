import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TutorEntity } from 'src/typeorm/entities/TutorEntity';
import { CreateTutorParams, UpdateTutorParams } from 'src/utils/types';
import { Repository } from 'typeorm';


@Injectable()
export class TutorService {
  constructor(
    @InjectRepository(TutorEntity)
    private readonly TutorRepository: Repository<TutorEntity>,
  ) {}

  async registerTutor(createTutorDetails: CreateTutorParams) {
    const Tutor = this.TutorRepository.create({
      ...createTutorDetails
    });
    await this.TutorRepository.save(Tutor);
    return 'Registration successful';
  }

  async updateTutor(id: number, updateTutorDetails: UpdateTutorParams) {
    await this.TutorRepository.update(
      { id: id },
      { ...updateTutorDetails },
    );
    return 'Update successful';
  }

  
  async getTutorById(TutorId: number): Promise<TutorEntity>{
    const Tutor = await this.TutorRepository.findOne({
        where: { id : TutorId } 
    });
    delete Tutor.password;
    return Tutor;
 }

 async approveRoleTutor(email: string): Promise<TutorEntity> {
  const tutor = await this.TutorRepository.findOne({
    where: {email : email}
  });
  tutor.isTutor = true;
   //tutor.programme = get programme programmeId
   return await this.TutorRepository.save(tutor);
 }

 async getTutorByEmail(email: string): Promise<TutorEntity> {
    const Tutor = await this.TutorRepository.findOneBy({email});
    delete Tutor.password;
    return Tutor;
 }

 async getAllTutors(): Promise<TutorEntity[]> { //promise<Tutor[]> to return a list of all Tutors
    const Tutors =  await this.TutorRepository.find();
    return Tutors;
 }


//  async getTutorByProgramme(programme: string): Promise<TutorEntity[]>{
//   return await this.TutorRepository.find({
//     where: {programme : programme}
//   });
//  }
  
}
