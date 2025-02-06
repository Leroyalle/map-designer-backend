import { BadRequestException, Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class EmailService {
  constructor(
    private prisma: PrismaService,
    private mailerService: MailerService,
  ) {}

  async sendVerificationCode(email: string, code: string) {
    const mailOptions = {
      from: 'Email Verification Code',
      to: email,
      subject: 'Email Verification Code',
      text: `Your verification code is: ${code}`,
    };

    try {
      await this.mailerService.sendMail(mailOptions);
      console.log('Email sent');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  async createVerificationCode(userId: string) {
    try {
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      const expiresAt = new Date();
      expiresAt.setMinutes(expiresAt.getMinutes() + 15);

      return await this.prisma.verificationCode.create({
        data: {
          code,
          expiresAt,
          userId,
        },
      });
    } catch (error) {
      console.error('Error creating verification code:', error);
      throw new BadRequestException('Failed to create verification code');
    }
  }

  async verifyCode(userId: string, code: string): Promise<boolean> {
    const verificationCode = await this.prisma.verificationCode.findFirst({
      where: {
        userId,
        code,
        expiresAt: {
          gt: new Date(),
        },
      },
    });

    if (verificationCode) {
      await this.prisma.verificationCode.delete({
        where: { id: verificationCode.id },
      });

      return true;
    }
    return false;
  }

  async sendReportOnEmail(email: string, filePath: string) {
    const mailOptions = {
      from: 'your-email@example.com',
      to: email,
      subject: 'Daily Report',
      text: 'Here is the daily report.',
      attachments: [
        {
          filename: 'report.pdf',
          path: filePath,
        },
      ],
    };

    try {
      await this.mailerService.sendMail(mailOptions);
      console.log(`Report sent to ${email}`);
    } catch (error) {
      console.error(`Error sending report to ${email}:`, error);
    }
  }
}
