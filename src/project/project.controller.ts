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
    console.log(file, file?.originalname);
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(+id);
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
