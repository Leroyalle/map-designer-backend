import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  UseGuards,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UserId } from './decorators/userId.decorator';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get()
  public async findAll() {
    return await this.userService.findAll();
  }

  @Get('/profile')
  public async getProfile(@UserId() userId: string) {
    const profile = await this.userService.findOne(userId);
    if (!profile) throw new NotFoundException('User not found');
    const { password: _, ...rest } = profile;
    return rest;
  }

  @Patch('/profile')
  public async update(
    @UserId() userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return await this.userService.update(userId, updateUserDto);
  }

  @Delete('/profile')
  public async remove(@UserId() userId: string) {
    return await this.userService.remove(userId);
  }
}
