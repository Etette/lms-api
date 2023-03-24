import { Controller, Get, Param, Post } from "@nestjs/common";
import { TutorService } from "src/tutor/service/profile/tutor.service";

@Controller('/tutor')
export class tutorController{
    constructor(private tutorService: TutorService) {}

    @Get() //only admin
    async getTutors() {
        return await this.tutorService.getAllTutors();
    }

    @Get('/tutor_email') //only admin
    async getTutorByEmail(@Param('email') email: string){
      return await this.tutorService.getTutorByEmail(email);
    }

    
    @Post('approve-tutor')
    async approveTutor(@Param('tutor_email')email: string){
        await this.tutorService.approveRoleTutor(email);
        return 'Tutor added'
    }

    // @Get('/:tutorId')
    // async getTutorById(@Param('TutorId') tutorId: number){
    //     return await this.tutorService.getTutorById(tutorId);
    // }

    //@post tutor approve/revoke
}