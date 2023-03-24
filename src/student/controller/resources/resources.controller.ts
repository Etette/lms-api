import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ResourcesService } from 'src/student/service/resources/resources.service';

@Controller('resources')
export class ResourcesController {
  constructor(private resourceService: ResourcesService) {}

  @Get('programme/:id')
  getAllResources(@Param('id', ParseIntPipe) id: number) {
    this.resourceService.getAllResources(id);
  }
}
