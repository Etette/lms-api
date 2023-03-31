import { Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { TutorService } from "src/tutor/service/profile/tutor.service";

@Controller('tutor')
export class tutorController{
    constructor(private tutorService: TutorService) {}

    @Get() //only admin
    async getTutors() {
        return await this.tutorService.getAllTutors();
    }

    @Get('get/email') //only admin
    async getTutorByEmail(@Param('email') email: string){
      return this.tutorService.getTutorByEmail(email);
    }

    @Get('get/id')
    getById(@Param('id', ParseIntPipe) id: number) {
       return console.log(id, Number(id), {id}, id.toString());
        //return await this.tutorService.getTutorById(id);
    }

    
    @Post('approve')
    async approveTutor(@Param('tutor_Id', ParseIntPipe) id: number){
        console.log(id);
        await this.tutorService.approveRoleTutor(id);
        return 'Tutor role approved';
    }

    // @Get('/:tutorId')
    // async getTutorById(@Param('TutorId') tutorId: number){
    //     return await this.tutorService.getTutorById(tutorId);
    // }

    //@post tutor approve/revoke
}