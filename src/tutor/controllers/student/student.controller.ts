import { Controller, Get, Param } from "@nestjs/common";
import { ProfileService } from "src/student/service/profile/profile.service";

@Controller()
export class studentController {
    constructor(private profileService: ProfileService) {}

    @Get() //only admin
    async getStudents() {
        return await this.profileService.getAllStudents();
    }

    @Get('get/student_by_programme') //only admin
    async studentsByProgramme(@Param('programme') progrgramme: string){
      return await this.profileService.getStudentByProgramme(progrgramme);
    }

    @Get('get/:studentId')
    async getStudentById(@Param('studentId') studentId: number){
        return await this.profileService.getStudentById(studentId);
    }
}