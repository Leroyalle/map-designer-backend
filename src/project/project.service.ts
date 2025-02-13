import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { PublishProjectDto } from './dto/publish-project.dto';

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
        canvasWidth: 1000,
        canvasHeight: 500,
      },
    });
  }

  async findAll(userId: string, page: number, perPage: number) {
    return await this.prisma.project.findMany({
      where: { userId },
      skip: (page - 1) * perPage,
      take: perPage,
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string, userId: string) {
    try {
      const findProject = await this.checkIfProjectBelongsToUser(id, userId);

      return {
        message: 'Проект успешно найден',
        data: findProject,
        isOwner: true,
      };
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Some error');
    }
  }

  async publish(projectId: string, data: PublishProjectDto, userId: string) {
    const findProject = await this.checkIfProjectBelongsToUser(
      projectId,
      userId,
    );

    // Получаем текущие элементы проекта
    const currentItems = await this.prisma.projectItem.findMany({
      where: { projectId: findProject.id },
    });

    const existingIds = currentItems.map((item) => item.id);

    const itemsToUpdate = data.items.filter(
      (item) => item.id && existingIds.includes(item.id),
    );
    const itemsToCreate = data.items.filter(
      (item) => !item.id || !existingIds.includes(item.id),
    );
    console.log('BEFORE UPDATE', data);
    await this.prisma.$transaction([
      this.prisma.project.update({
        where: { id: findProject.id },
        data: {
          canvasWidth: data.canvasWidth,
          canvasHeight: data.canvasHeight,
        },
      }),

      ...currentItems
        .filter((item) => !data.items.some((dItem) => dItem.id === item.id))
        .map((item) =>
          this.prisma.projectItem.delete({ where: { id: item.id } }),
        ),

      ...itemsToUpdate.map((item) =>
        this.prisma.projectItem.update({
          where: { id: item.id },
          data: item,
        }),
      ),

      this.prisma.project.update({
        where: { id: findProject.id },
        data: {
          items: {
            create: itemsToCreate.map((item) => ({
              ...item,
            })),
          },
        },
      }),
    ]);

    // Получаем обновленный проект
    const updatedProject = await this.prisma.project.findUnique({
      where: { id: findProject.id },
      include: { items: true },
    });

    return {
      message:
        'Проект успешно опубликован. Отправьте публичную ссылку чтобы поделиться проектом',
      data: updatedProject,
      isOwner: true,
    };
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    console.log(updateProjectDto);
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }

  async checkIfProjectBelongsToUser(projectId: string, userId: string) {
    const findProject = await this.prisma.project.findFirst({
      where: {
        AND: [{ id: projectId }, { userId }],
      },
      include: { items: true },
    });

    if (!findProject) {
      throw new ConflictException('Project not found');
    }

    return findProject;
  }
}
