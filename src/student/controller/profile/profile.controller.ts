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
  import { CreateStudentDto } from 'src/student/Dto/CreateStudent.Dto';
  import { UpdateStudentDto } from 'src/student/Dto/UpdateStudent.Dto';
  import { ProfileService } from 'src/student/service/profile/profile.service';
  
  @Controller()
  export class ProfileController {
    constructor(private profileService: ProfileService) {}
  
    @Get()
    index() {
      //show the profile
    }

    // @Get('all') //only admin
    // async getStudents() {
    //     return await this.profileService.getAllStudents();
    // }

    // @Get('get_by/programme') //only admin
    // async studentsByProgramme(@Param('programme') progrgramme: string){
    //   return await this.profileService.getStudentByProgramme(progrgramme);
    // }

    // @Get('get_by/:studentId')
    // async getStudentById(@Param('studentId') studentId: number){
    //     return await this.profileService.getStudentById(studentId);
    // }

    @Patch('profile/update/:studentId')
    async updateStudent(@Param('studentId') studentId: number, @Body() updateStudentDto: UpdateStudentDto) {
        return await this.profileService.updateStudent(studentId, updateStudentDto);
    }

  
    @Post('register')
    async registerAccount(@Body() createStudentDTO: CreateStudentDto) {
      return await this.profileService.registerStudent(createStudentDTO);
    }
}
  