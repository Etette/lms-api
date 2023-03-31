import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { map, Observable, switchMap } from "rxjs";
//import { AuthService } from "src/auth/auth.service";
import { LoginStudentDto } from "src/student/Dto/LoginStudentDto";
import { StudentEntity } from "src/typeorm/entities/StudentEntity";
import { CreateStudentParams, UpdateStudentParams, userI } from "src/utils/types";
import { Repository } from "typeorm";



@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(StudentEntity)
    private readonly studentRepository: Repository<StudentEntity>,
    //private authService: AuthService,
  ) {}
  

  async Create(createStudentDetails: CreateStudentParams) {
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
   await this.status(id);
   //await this.adminRepository.save(set_role)
   return 'Update successful';
 }

//  private validdate_password(password: string, dbPassword:  string): Observable<StudentEntity>{
//   return this.authService.comparePasswords(password, dbPassword);
// }

// studentLogin(student: LoginStudentDto): Observable<string> {
//   return this.validateStudent(student.email, student.password).pipe(
//     switchMap((student: StudentEntity) => {
//       if(student) {
//         // return this.authService.generateJWTStudent(student).pipe(map((jwt: string) => jwt));
//         return 'Login sucessful';
//       } else {
//         return 'invalid login details';
//       }
//     })
//   )
// }

// validateStudent(email: string, password: string): Observable<userI> {
//   const student_ = this.findBymail(email).pipe(
//     switchMap((student: userI) => this.authService.comparePasswords(password, student.password).pipe(
//       map((match: boolean) => {
//         if(match) {
//           const {password, ...result} = student;
//           return result;
//         } else {
//           throw Error;
//         }
//       })
//     ))
//   )
//   return student_;
// }

async getStudent(query: object): Promise<StudentEntity> {
  return this.studentRepository.findOne(query);
}




// Login(student: LoginStudentDto): Observable<string> {
//   return this.mailExist(student.email).pipe(
//     switchMap((_student: StudentEntity) => this.validdate_password(student.password, _student.password).pipe(
//       map((matchedPassword: boolean) => {
//        if (matchedPassword) {
//         const {...res} = student;
//         return res;
//        }else {
//         throw new HttpException('Login failed', HttpStatus.UNAUTHORIZED);
//        }
//       })
//     ))
//   )
// }

 private async status(id : number) {
   const student = await this.studentRepository.findOne({
    where: {id : id }
   });
    student.isActive = true;
    return this.studentRepository.save(student); 
  }

  private async mailExist(email: string): Promise<StudentEntity> {
    const student = await this.studentRepository.findOne({
      select: ['firstname', 'lastname', 'email', 'id', 'password'],
      where: {email: email},
    });
    if (!student){
       'Not found';
    }
    return student;
  }

  async findBymail(email: string) {
    return await this.studentRepository.findOneBy({
        email: email,
    })
  }

 async studentById(Id: number): Promise<StudentEntity>{
  const student = await this.studentRepository.findOne({where: {id : Id}});
  delete student.password;
  return student;
  }

  async allStudents(): Promise<StudentEntity[]> { //promise<admin[]> to return a list of all admins
    const student =  await this.studentRepository.find();
    student.forEach(function (v) {delete v.password});
    return student;
 }

 async getStudentByProgramme(programme: string): Promise<StudentEntity[]>{
    return await this.studentRepository.find({
      where: {programme : programme}
    });
   }

 removeStudent(id: number) {
  return this.studentRepository.delete({ id });
 }

}
