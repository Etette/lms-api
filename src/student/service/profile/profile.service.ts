import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from 'src/typeorm/entities/StudentEntity';
import { CreateStudentParams, UpdateStudentParams } from 'src/utils/types';
import { Repository } from 'typeorm';


@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(StudentEntity)
    private readonly studentRepository: Repository<StudentEntity>,
  ) {}

  async registerStudent(createStudentDetails: CreateStudentParams) {
    let student = this.studentRepository.create({
      ...createStudentDetails
    });
    student.isActive = true;
    await this.studentRepository.save(student);
    return 'Registration successful';
  }

  async updateStudent(id: number, updateStudentDetails: UpdateStudentParams) {
    await this.studentRepository.update(
      { id: id },
      { ...updateStudentDetails },
    );
    return 'Update successful';
  }
  
  async getStudentById(studentId: number): Promise<StudentEntity>{
    const student = await this.studentRepository.findOne({
        where: { id : studentId } 
    });
    delete student.password;
    return student;
 }

  async studentMail(email: string): Promise<StudentEntity>{
  const student = await this.studentRepository.findOne({
    where: {email : email}
  });
  return student;
 }

 async getStudentByEmail(email: string): Promise<StudentEntity> {
    const student = await this.studentRepository.findOneBy({email});
    delete student.password;
    return student;
 }

 async getAllStudents(): Promise<StudentEntity[]> { //promise<student[]> to return a list of all students
    const students =  await this.studentRepository.find();
    return students;
 }

 async getStudentByProgramme(programme: string): Promise<StudentEntity[]>{
  return await this.studentRepository.find({
    where: {programme : programme}
  });
 }
  
}
