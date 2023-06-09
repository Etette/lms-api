import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminEntity } from 'src/typeorm/entities/adminEntity';
import { CreateAdminParams, UpdateAdminParams } from 'src/utils/types';
import { Repository } from 'typeorm';


@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminEntity)
    private readonly adminRepository: Repository<AdminEntity>,
  ) {}

  async registeradmin(createadminDetails: CreateAdminParams) {
    const admin = this.adminRepository.create({
      ...createadminDetails
    });
    await this.adminRepository.save(admin);
    return 'Registration successful';
  }

  async updateadmin(id: number, updateadminDetails: UpdateAdminParams) {
    this.setRole(id);
    await this.adminRepository.update(
      { id: id },
      { ...updateadminDetails },
    );
    //await this.adminRepository.save(set_role)
    return 'Update successful';
  }
  
     async getadminById(adminId: number): Promise<AdminEntity>{
        const admin = await this.adminRepository.findOne({
            where: { id : adminId } 
        });
        delete admin.password;
        return admin;
    }

    private async setRole(id : number) {
      const admin = await this.adminRepository.findOne({
        where: {id : id }
      });
      admin.isAdmin = true;
      return this.adminRepository.save(admin);
    }

    async getadminByEmail(ademail: string): Promise<AdminEntity> {
        const admin = await this.adminRepository.findOne({
          where: {email: ademail},
          select: {
            firstname: true,
            lastname: true,
            email: true,
          }
        });
        //delete admin.password;
        return admin;
    }

     async getAlladmins(): Promise<AdminEntity[]> { //promise<admin[]> to return a list of all admins
        const admins =  await this.adminRepository.find();
        admins.forEach(function (v) {delete v.password});
        return admins;
     }
  
}
