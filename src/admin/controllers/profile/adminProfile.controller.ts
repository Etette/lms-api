import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
  } from '@nestjs/common';
  import { CreateAdminDto } from 'src/admin/Dto/CreateAdminDto';
  import { UpdateAdminDto } from 'src/admin/Dto/UpdateAdminDto';
  import { AdminService } from 'src/admin/services/profile/adminProfile.service';
  
  @Controller('profile')
  export class adminController {
    constructor(private adminService: AdminService) {}
  
    @Get()
    index() {
      //show the profile
    }

    @Get('all') //only admin
    async getAdmins() {
        return await this.adminService.getAlladmins();
    }

    @Get('/get/:adminId')
    async getadminById(@Param('adminId') adminId: number){
        return await this.adminService.getadminById(adminId);
    }

    @Patch('/update/:adminId')
    async updateAdmin(@Param('adminId') adminId: number, @Body() updateAdminDto: UpdateAdminDto) {
        return await this.adminService.updateadmin(adminId, updateAdminDto);
    }

    @Get('/get/:email')
    async adminByEmail(@Param('Admin email') adminEmail: string){
      return await this.adminService.getadminByEmail(adminEmail);
    }

  
    @Post('register')
    async registerAsAdmin(@Body() createAdminDTO: CreateAdminDto) {
      return await this.adminService.registeradmin(createAdminDTO);
    }
}
  