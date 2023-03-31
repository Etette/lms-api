import { Controller, Get, Param } from "@nestjs/common";
import { ProfileService } from "src/student/service/profile/profile.service";

@Controller()
export class studentController {
    constructor(private profileService: ProfileService) {}

    @Get() //only admin
    async getStudents() {
        return await this.profileService.allStudents();
    }

    // @Get('get/student_by_programme') //only admin
    // async studentsByProgramme(@Param('programme') progrgramme: string){
    //   return await this.profileService.getStudentByProgramme(progrgramme);
    // }

    @Get('get/:studentId')
    getStudentById(@Param('studentId') studentId: number){
        return this.profileService.studentById(studentId);
    }

    @Get('get/email')
    getStudentByEmail(@Param('student Email') email: string){
        return this.profileService.findBymail(email);
   }
}