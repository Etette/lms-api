// import { Controller, Body, Post, UseGuards, Request } from "@nestjs/common";
// import { AuthGuard } from "@nestjs/passport";
// import { AuthService } from "./auth.service";
// import { AuthLoginDto } from "./Dto/auth-login.dto";


// @Controller('auth')
// export class AuthController {
//     constructor(private readonly authService: AuthService) {}


//     @UseGuards(AuthGuard('local'))
//     @Post('auth/login')
//     async loginStudent(@Request() req) {
//         return this.authService.LoginStudent(req.student);
//     }

//     // @Post()
//     // async adminLogin(@Body() authLoginDto: AuthLoginDto) {
//     //     return this.authService.loginAdmin(authLoginDto);
//     // }

//     // to use AuthGuard
//     /**@UseGuards (JwtAuthGuard)
//      * @Get()
//      * async test(){
//      *  return 'success'
//      * }
//      */
// }