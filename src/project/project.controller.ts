import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  Query,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { UpdateProjectDto } from './dto/update-project.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserId } from 'src/user/decorators/userId.decorator';
import { PublishProjectDto } from './dto/publish-project.dto';

@UseGuards(JwtAuthGuard)
@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  public async create(
    @UserId() userId: string,
    @UploadedFile() file: Express.Multer.File | undefined,
    @Body() createProjectDto: { name: string },
  ) {
    const createData = {
      ...createProjectDto,
      imageUrl: file ? file.filename : undefined,
      userId,
    };
    return await this.projectService.create(createData);
  }

  @Get()
  async findAll(
    @UserId() userId: string,
    @Query('page') page: number = 1,
    @Query('perPage') perPage: number = 10,
  ) {
    return await this.projectService.findAll(userId, +page, +perPage);
  }

  @Post(':projectId/publish')
  publish(
    @Param('projectId') projectId: string,
    @Body() data: PublishProjectDto,
    @UserId() userId: string,
  ) {
    return this.projectService.publish(projectId, data, userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @UserId() userId: string) {
    const project = await this.projectService.findOne(id, userId);
    console.log('project', project);
    return project;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.update(+id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectService.remove(+id);
  }
}
