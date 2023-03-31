// import { Injectable, NotAcceptableException, UnauthorizedException } from "@nestjs/common";
// import { ProfileService } from "src/student/service/profile/profile.service";
// import { JwtService } from '@nestjs/jwt';
// import { AuthLoginDto } from "./Dto/auth-login.dto";
// //import { StudentEntity } from "src/typeorm/entities/StudentEntity";
// import { AdminEntity } from "src/typeorm/entities/AdminEntity";
// import { AdminService } from "src/admin/services/profile/adminProfile.service";
// //import { studentI } from "src/utils/types";
// import { from, Observable, of } from "rxjs";
// const bcrypt = require('bcrypt');


// @Injectable()
// export class AuthService {
//     constructor(
//         private studentService: ProfileService,
//         //private adminService: AdminService,
//         private readonly jwtService: JwtService) {}

//     // generateJWTStudent(student: studentI): Observable <string> {
//     //     return from(this.jwtService.signAsync({student}));
//     // }

//     hashpassword(password: string): Observable<string> {
//         return from<string>(bcrypt.hash(password, 12));
//     }

//     comparePasswords(newPassword: string, hashedPassword: string): Observable <any | boolean> {
//         return of(bcrypt.compare(newPassword,hashedPassword));
//     }

//     async validateStudent(email: string, password: string): Promise<any> {
//         const student = await this.studentService.getStudent({ email });
//         if (!student) return null;
//         const validPassword = this.comparePasswords(password, student.password)
//         if (!student) {
//             throw new NotAcceptableException('user not found');
//         }
//         if (student && validPassword) {
//             return student;
//         }
//         return null;
//     }

//     async LoginStudent(student: any) {
//         const payload = {email: student.email, sub: student._id};
//         return {
//             access_token: this.jwtService.sign(payload),
//         }
//     }

//     // async studentLogin(authLoginDto: AuthLoginDto) {
//     //     const student = await this.validateStudent(authLoginDto);

//     //     const payload = {
//     //         id : student.id,
//     //     };
//     //     return {
//     //         access_token: this.jwtService.sign(payload),
//     //     };
//     // }

//     // async validateStudent(authLoginDto: AuthLoginDto): Promise<StudentEntity> {
//     //     const { email, password } = authLoginDto;

//     //     const student = await this.studentService.studentMail(email);
//     //     if(!(await student?.validatePassword(password))){
//     //         throw new UnauthorizedException();
//     //     }
//     //     return student;
//     // }

    
//     // async loginAdmin(authLoginDto: AuthLoginDto) {
//     //     const admin = await this.validateAdmin(authLoginDto);

//     //     const payload = {
//     //         id : admin.id,
//     //     };
//     //     return {
//     //         access_token: this.jwtService.sign(payload),
//     //     };
//     // }

//     // async validateAdmin(authLoginDto: AuthLoginDto): Promise<AdminEntity> {
//     //     const { email, password } = authLoginDto;

//     //     const admin = await this.adminService.getadminByEmail(email);
//     //     if(!(await admin?.validatePassword(password))){
//     //         throw new UnauthorizedException();
//     //     }
//     //     return admin;
//     // }
// }