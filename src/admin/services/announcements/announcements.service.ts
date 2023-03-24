import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnnouncementEntity } from 'src/typeorm/entities/AnnouncementEntity';
import {
  CreateAnnouncementParams,
  UpdateAnnouncementParams,
} from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class AnnouncementsService {
  constructor(
    @InjectRepository(AnnouncementEntity)
    private announcementRepository: Repository<AnnouncementEntity>,
  ) {}

  getAllAnnouncements() {
    return this.announcementRepository.find();
  }

  createAnnouncement(createAnnouncementDetails: CreateAnnouncementParams) {
    const newAnnouncement = this.announcementRepository.create({
      ...createAnnouncementDetails,
    });
    return this.announcementRepository.save(newAnnouncement);
  }

  updateAnnouncement(
    id: number,
    updateAnnouncementDetails: UpdateAnnouncementParams,
  ) {
    return this.announcementRepository.update(
      { id },
      { ...updateAnnouncementDetails },
    );
  }

  deleteAnnouncement(id: number) {
    return this.announcementRepository.delete({ id });
  }
}
