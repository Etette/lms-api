import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
  } from '@nestjs/common';
  import { ApiOkResponse } from '@nestjs/swagger';
  import { CreateAnnouncementDTO } from 'src/tutor/Dto/CreateAnnouncementDto';
  import { UpdateAnnouncementDTO } from 'src/tutor/Dto/UpdateAnnouncementDTO';
  import { AnnouncementsService } from 'src/tutor/service/announcements/announcements.service';
  import { AnnouncementEntity } from 'src/typeorm/entities/AnnouncementEntity';
  
  @Controller('announcements')
  export class AnnouncementsController {
    constructor(private announcementService: AnnouncementsService) {}
  
    @Get('all')
    @ApiOkResponse({ status: 200, type: AnnouncementEntity, isArray: true })
    getAllAnnouncements() {
      return this.announcementService.getAllAnnouncements();
    }
  
    @Post('create')
    async createAnnouncement(
      @Body() createAnnouncementDTO: CreateAnnouncementDTO,
    ) {
      return await this.announcementService.createAnnouncement({
        ...createAnnouncementDTO,
      });
    }
  
    @Put('update/:id')
    updateAnnouncement(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateAnnouncementDTO: UpdateAnnouncementDTO,
    ) {
      return this.announcementService.updateAnnouncement(id, {
        ...updateAnnouncementDTO,
      });
    }
  
    @Delete('delete/:id')
    deleteAnnouncement(@Param('id', ParseIntPipe) id: number) {
      this.announcementService.deleteAnnouncement(id);
    }
  }
  