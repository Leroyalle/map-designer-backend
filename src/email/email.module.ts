import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    PrismaModule,
    MailerModule.forRoot({
      transport: {
        service: 'gmail',
        secure: false,
        auth: {
          user: 'vashilo.artem7@gmail.com', // ваш email
          pass: 'haxk tuyb wxrs usmj', // пароль приложения Google
        },
      },
      defaults: {
        from: '"No Reply" <vashilo.artem7@gmail.com>',
      },
    }),
  ],
  controllers: [EmailController],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}
