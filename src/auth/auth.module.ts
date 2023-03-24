import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { StudentModule } from "src/student/student.module";
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from "./jwt.strategy";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { ProfileService } from "src/student/service/profile/profile.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StudentEntity } from "src/typeorm/entities/StudentEntity";
import { AdminService } from "src/admin/services/profile/adminProfile.service";
import { AdminEntity } from "src/typeorm/entities/AdminEntity";


@Module({
    imports: [
        TypeOrmModule.forFeature([
            StudentEntity,
            AdminEntity,
        ]),
        StudentModule,
        PassportModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async () => ({
                secretOrPrivateKey: process.env.JWT_SECRET,
            }),
            inject: [ConfigService],
        }),
    ],
    controllers: [AuthController],
    providers: [ProfileService, AdminService, AuthService, JwtStrategy],
})
export class AuthModule {}