import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads',
        filename: (_, file, callback) => {
          const originalName = file.originalname.replace(/\s+/g, '_');
          const fileName = `${Date.now()}-${originalName}`;
          callback(null, `${fileName}`);
        },
      }),
    }),
  ],
  controllers: [ProjectController],
  providers: [ProjectService, PrismaService, UserService],
})
export class ProjectModule {}
