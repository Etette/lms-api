import { Controller, Delete, Get, Param, ParseIntPipe } from "@nestjs/common";
import { ProfileService } from 'src/student/service/profile/profile.service'
import { StudentEntity } from "src/typeorm/entities/StudentEntity";

@Controller('/student')
export class studentController {
    constructor(private profileService: ProfileService) {}
    @Get('get/all') //only admin
    getStudents() {
        return this.profileService.allStudents();
    }

    @Get('/get/by_programme') 
    async studentsByProgramme(@Param('programme') progrgramme: string){
      return await this.profileService.getStudentByProgramme(progrgramme);
    }

    @Get('get/email')
    async studentByEmail(@Param('student email') email: string){
        return await this.profileService.findBymail(email)
    }

    @Get('get/Id')
    async getStudentById(@Param('studentId') studentId: number): Promise<StudentEntity> {
        return await this.profileService.studentById(Number(studentId));
    }

    @Delete('id')
    async DeleteStudent(@Param('student id', ParseIntPipe) id: number) {
        return await this.profileService.removeStudent(id);
    }

}