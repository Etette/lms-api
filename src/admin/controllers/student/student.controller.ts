import { Controller, Get, Param } from "@nestjs/common";
import { ProfileService } from 'src/student/service/profile/profile.service'

@Controller('/student')
export class studentController {
    constructor(private profileService: ProfileService) {}
    @Get('/all') //only admin
    async getStudents() {
        return await this.profileService.getAllStudents();
    }

    @Get('/by_programme') //only admin
    async studentsByProgramme(@Param('programme') progrgramme: string){
      return await this.profileService.getStudentByProgramme(progrgramme);
    }

    @Get('/by_email')
    async studentByEmail(@Param('studentEmail') email: string){
        return await this.profileService.getStudentByEmail(email);
    }

    @Get('/:studentId')
    async getStudentById(@Param('studentId') studentId: number){
        return await this.profileService.getStudentById(studentId);
    }
}