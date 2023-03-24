import { Controller, Body, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthLoginDto } from "./Dto/auth-login.dto";


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post()
    async loginStudent(@Body() authLoginDto: AuthLoginDto) {
        return this.authService.studentLogin(authLoginDto);
    }

    @Post()
    async adminLogin(@Body() authLoginDto: AuthLoginDto) {
        return this.authService.loginAdmin(authLoginDto);
    }

    // to use AuthGuard
    /**@UseGuards (JwtAuthGuard)
     * @Get()
     * async test(){
     *  return 'success'
     * }
     */
}