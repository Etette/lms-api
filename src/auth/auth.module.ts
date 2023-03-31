import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { StudentModule } from "src/student/student.module";
import { ConfigModule, ConfigService } from '@nestjs/config';
//import { JwtStrategy } from "./jwt.strategy";
// import { AuthController } from "./auth.controller";
// import { AuthService } from "./auth.service";
// import { TypeOrmModule } from "@nestjs/typeorm";
// import { StudentEntity } from "src/typeorm/entities/StudentEntity";
// import { AdminService } from "src/admin/services/profile/adminProfile.service";
// import { AdminEntity } from "src/typeorm/entities/AdminEntity";
// import { JwtService } from "@nestjs/jwt";
import * as dotenv from 'dotenv';
import { AdminModule } from "src/admin/admin.module";
// // import { JwtStrategy } from "./jwt.strategy";
dotenv.config();


// console.log( ConfigService.get('JWT_SECRET')),;
console.log(process.env.JWT_SECRET);
// console.log(JwtService);


@Module({
    imports: [
        // TypeOrmModule.forFeature([
        //     //StudentEntity,
        //     AdminEntity,
        // ]),
        // StudentModule,
        PassportModule,
        AdminModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                secret: `${process.env.JWT_KEY}` || configService.get('JWT_SECRET'),
                signOptions: {expiresIn: '10h'}
            }),
        }),
    ],
   // controllers: [AuthController],
    providers: [ /**AuthService, */JwtService],
    //exports:  [AuthService]
})
export class AuthModule {}