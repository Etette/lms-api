import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
  } from '@nestjs/common';
  import { SignupTutorDto } from 'src/tutor/Dto/tutorSignup.Dto';
  import { UpdateTutorDto } from 'src/tutor/Dto/updateTutor.Dto';
  import { TutorService } from 'src/tutor/service/profile/tutor.service';
import { isTutor } from 'src/utils/enums';
  
  @Controller('profile')
  export class TutorController {
    constructor(private tutorService: TutorService) {}
  
    @Get()
    index() {
      //show the Tutor
    }

    @Get('all_tutors') //only admin
    async getTutors() {
        return await this.tutorService.getAllTutors();
    }

    @Get('get_by/email') //only admin
    async getTutorByEmail(@Param('email') email: string){
      return await this.tutorService.getTutorByEmail(email);
    }

    // @Get('get_by/:tutorId')
    // async getTutorById(@Param('TutorId') tutorId: number){
    //     return await this.tutorService.getTutorById(tutorId);
    // }

    // @Patch('update/:tutorId')
    // async updateTutor(@Param('TutorId') TutorId: number, @Body() updateTutorDto: UpdateTutorDto) {
    //     return await this.tutorService.updateTutor(TutorId, updateTutorDto);
    // }

    @Patch('update/:id')
    updateProfile(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateTutorDTO: UpdateTutorDto,
    ) {
      return this.tutorService.updateTutor(id, { ...updateTutorDTO });
    }

    @Post('register')
    async registerAsTutor(@Body() createTutorDTO: SignupTutorDto) {
      return await this.tutorService.registerTutor(createTutorDTO);
    }
}
  