/* eslint-disable prettier/prettier */
import { Controller, Body, Post, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from 'src/dto/signup.dto';
import { LoginDto } from 'src/dto/login.dto';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService
    ) {}


    @Post('/signup')
    signUp(@Body() signUpDto: SignUpDto): Promise<{token: string}>{
        return this.authService.signUp(signUpDto);
    }

    @Get('/login')
    login(@Body() loginDto: LoginDto): Promise<{token: string}>{
        return this.authService.login(loginDto)
    }
}
