import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterUser } from './dto/register-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { EmailService } from 'src/email/email.service';
import { UserService } from 'src/user/user.service';
import { VerifyUserDto } from './dto/verify-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private emailService: EmailService,
    private userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  public async register(createAuthDto: RegisterUser) {
    const findUser = await this.userService.findOneByEmail(createAuthDto.email);

    if (findUser) {
      throw new ConflictException('User already exists');
    }

    const createdUser = await this.userService.create(createAuthDto);
    const createdCode = await this.emailService.createVerificationCode(
      createdUser.id,
    );

    await this.emailService.sendVerificationCode(
      createdUser.email,
      createdCode.code,
    );

    return {
      message:
        'Пользователь зарегистрирован. Пожалуйста, проверьте вашу электронную почту для получения кода подтверждения',
      verified: false,
      userId: createdUser.id,
      checkPassword: false,
    };
  }

  public async verify({ userId, code }: VerifyUserDto) {
    const findUser = await this.userService.findOne(userId);

    if (findUser && findUser.isVerified) {
      throw new ConflictException('User already verified');
    }

    const isVerified = await this.emailService.verifyCode(userId, code);

    if (!isVerified) {
      throw new ConflictException('Invalid code');
    }

    await this.prisma.user.update({
      where: { id: userId },
      data: { isVerified: true },
    });

    return {
      message: 'Пользователь успешно подтвержден. Можете входить в аккаунт',
      verified: true,
      checkPassword: true,
    };
  }

  public async login(loginDto: LoginUserDto) {
    const findUser = await this.userService.findOneByEmail(loginDto.email);

    if (!findUser) {
      throw new NotFoundException(`Акаунт не найден`);
    }

    const passwordIsMatch = await argon2.verify(
      findUser.password,
      loginDto.password,
    );

    if (!passwordIsMatch) {
      throw new UnauthorizedException(`Неверный логин или пароль`);
    }

    return {
      message: 'Успешный вход в аккаунт. Добро пожаловать',
      token: this.jwtService.sign({
        id: findUser.id,
      }),
      verified: true,
      checkPassword: true,
    };
  }
}
