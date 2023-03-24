import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnnouncementEntity } from 'src/typeorm/entities/AnnouncementEntity';
import { Repository } from 'typeorm';

@Injectable()
export class AnnouncementsService {
  constructor(
    @InjectRepository(AnnouncementEntity)
    private announcementRepository: Repository<AnnouncementEntity>,
  ) {}

  getAnnouncementsForStudent() {
    return this.announcementRepository.find();
  }
}
