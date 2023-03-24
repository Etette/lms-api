import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResourceEntity } from 'src/typeorm/entities/ResourceEntity';
import { CreateResourceParams, UpdateResourceParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class ResourcesService {
  constructor(
    @InjectRepository(ResourceEntity)
    private resourceRepository: Repository<ResourceEntity>,
  ) {}

  getAllResources() {
    return this.resourceRepository.find();
  }

  createResource(createResourceDetails: CreateResourceParams) {
    const newResource = this.resourceRepository.create({
      ...createResourceDetails,
    });
    return this.resourceRepository.save(newResource);
  }

  updateResource(id: number, updateResourceDetails: UpdateResourceParams) {
    return this.resourceRepository.update({ id }, { ...updateResourceDetails });
  }

  deleteResource(id: number) {
    return this.resourceRepository.delete({ id });
  }
}
