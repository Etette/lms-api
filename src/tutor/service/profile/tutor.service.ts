import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { from, Observable } from 'rxjs';
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

  
  async getTutorById(_id: number): Promise<TutorEntity> {
    const tutor = await this.TutorRepository.findOneBy({
      id: _id,
    })
    delete tutor.password;
    return tutor;
 }

 async approveRoleTutor(Id: number): Promise<TutorEntity>{
  const tutor = await this.TutorRepository.findOneBy({
    id: Id,
  });
  tutor.isTutor = true;
   //tutor.programme = get programme programmeId
   return await this.TutorRepository.save(tutor);
 }

 removeTutor(id: number){
  return this.TutorRepository.delete({ id });
 }

 async getTutorByEmail(email : string): Promise<TutorEntity | undefined> {
    const Tutor = await this.TutorRepository.findOneBy({
      email: email,
    });
    if (!Tutor) {
      throw new Error('Tutor not found');
    }
    delete Tutor.password;
    return Tutor;
 }

 async getAllTutors(): Promise<TutorEntity[]> { //promise<Tutor[]> to return a list of all Tutors
    const Tutors =  await this.TutorRepository.find();
    Tutors.forEach(function (v) {delete v.password});
    return Tutors;
 }


//  async getTutorByProgramme(programme: string): Promise<TutorEntity[]>{
//   return await this.TutorRepository.find({
//     where: {programme : programme}
//   });
//  }
  
}
