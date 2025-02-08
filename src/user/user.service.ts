import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon2 from 'argon2';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  public async create(createUserDto: CreateUserDto) {
    return await this.prisma.user.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        password: await argon2.hash(createUserDto.password),
      },
    });
  }

  public async findAll() {
    return await this.prisma.user.findMany();
  }

  public async findOne(id: string) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  public async findOneByEmail(email: string) {
    return await this.prisma.user.findFirst({ where: { email } });
  }

  public async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  public async remove(id: string) {
    return await this.prisma.user.delete({ where: { id } });
  }
}
