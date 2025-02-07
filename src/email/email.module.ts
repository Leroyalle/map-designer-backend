import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
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
          user: 'vashilo.artem7@gmail.com',
          pass: 'haxk tuyb wxrs usmj',
        },
      },
      defaults: {
        from: '"No Reply" <vashilo.artem7@gmail.com>',
      },
    }),
  ],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}
