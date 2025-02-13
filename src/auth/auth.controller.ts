import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUser } from './dto/register-user.dto';
import { VerifyUserDto } from './dto/verify-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // TODO: check call and more data
  // TODO: check provider
  @Post('register')
  register(@Body() createAuthDto: RegisterUser) {
    return this.authService.register(createAuthDto);
  }

  @Post('verify')
  verify(@Body() verifyDto: VerifyUserDto) {
    return this.authService.verify(verifyDto);
  }

  @Post('login')
  login(@Body() loginDto: LoginUserDto) {
    return this.authService.login(loginDto);
  }
}
