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
  import { CreateResourceDTO } from 'src/tutor/Dto/CreateResourceDto';
  import { UpdateResourceDTO } from 'src/tutor/Dto/UpdateResourcesDto';
  import { ResourcesService } from 'src/tutor/service/resources/resources.service';
  import { ResourceEntity } from 'src/typeorm/entities/ResourceEntity';
  
  @Controller('resources')
  export class ResourcesController {
    constructor(private resourceService: ResourcesService) {}
  
    @Get()
    @ApiOkResponse({ status: 200, type: ResourceEntity, isArray: true })
    getAllResources() {
      return this.resourceService.getAllResources();
    }
  
    @Post('create')
    async createResource(@Body() createResourceDTO: CreateResourceDTO) {
      return await this.resourceService.createResource({
        ...createResourceDTO,
      });
    }
  
    @Put('update/:id')
    updateResource(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateResourceDTO: UpdateResourceDTO,
    ) {
      return this.resourceService.updateResource(id, {
        ...updateResourceDTO,
      });
    }
  
    @Delete('delete/:id')
    deleteResource(@Param('id', ParseIntPipe) id: number) {
      this.resourceService.deleteResource(id);
    }
  }
  