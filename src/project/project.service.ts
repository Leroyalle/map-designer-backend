import { ConflictException, Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ProjectService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
  ) {}

  public async create(createProjectDto: CreateProjectDto) {
    const findUser = await this.userService.findOne(createProjectDto.userId);

    if (!findUser) {
      throw new ConflictException('User not found');
    }

    return await this.prisma.project.create({
      data: {
        name: createProjectDto.name,
        imageUrl: createProjectDto.imageUrl,
        user: {
          connect: { id: findUser.id },
        },
      },
    });
  }

  findAll() {
    return `This action returns all project`;
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    console.log(updateProjectDto);
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
