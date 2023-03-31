import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Query,
  } from '@nestjs/common';
  import { catchError, map, Observable, of } from 'rxjs';
  //import { AuthService } from 'src/auth/auth.service';
  import { CreateStudentDto } from 'src/student/Dto/CreateStudent.Dto';
  import { LoginStudentDto } from 'src/student/Dto/LoginStudentDto';
  import { UpdateStudentDto } from 'src/student/Dto/UpdateStudent.Dto';
  import { ProfileService } from 'src/student/service/profile/profile.service';
  import { StudentEntity } from 'src/typeorm/entities/StudentEntity';
  import {  CreateStudentParams, UpdateStudentParams } from 'src/utils/types';
  
  @Controller('profile')
  export class ProfileController {
    constructor(private profileService: ProfileService) {}
  
    @Get('all')
    index() {
      //show the profile
      return this.profileService.allStudents();
    }

    // @Post('register')
    // register(@Body() student: CreateStudentDto): Observable<studentI |  Object> {
    //   return this.profileService.CreateStudent(student).pipe(
    //     map((student: studentI) => student),
    //     catchError(err => of({error: err.message}))
    //   );
    // }

    @Post('login')
    loginStudent(@Body() student: LoginStudentDto) {
    // return this.authService.LoginStudent(student);
    }

    // @Post('login2')
    // Log(@Body() student: LoginStudentDto) {
    //   return this.profileService.studentLogin(student);
    // }

    @Post('register')
    async registerAsAdmin(@Body() createAdminDTO: CreateStudentDto) {
      return await this.profileService.Create(createAdminDTO);
    }

    @Get('id')
    getStudentById(@Param('id', ParseIntPipe) id : number){
      return this.profileService.studentById(id);
    }

    // @Get('email')
    // getStudentByEmail(@Param('email') email: string) {
    //   return this.profileService.findBymail(email);
    // }

    // @Get('email2')
    // getStudentByEmail2(@Param('email') email: string){
    //   return this.profileService.findStudentByEmai2l(email);
    // }

    @Post('update/:id')
    updateStudent(@Param('id') id: number, @Body() student: UpdateStudentDto) {
      return this.profileService.updateStudent(id, student);
    }

    // @Patch('profile/update/:studentId')
    // async updateStudent(@Param('studentId') studentId: number, @Body() updateStudentDto: UpdateStudentDto) {
    //     return await this.profileService.updateStudent(studentId, updateStudentDto);
    // }

  
    // @Post('register')
    // async registerAccount(@Body() createStudentDTO: CreateStudentDto) {
    //   return await this.profileService.registerStudent(createStudentDTO);
    // }
}
  