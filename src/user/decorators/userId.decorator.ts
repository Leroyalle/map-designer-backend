import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

export interface User {
  id: string;
}

export interface AuthenticatedRequest extends Request {
  user: User;
}

export const UserId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request: AuthenticatedRequest = ctx.switchToHttp().getRequest();
    if (!request.user) {
      throw new UnauthorizedException('User is not authenticated');
    }
    return request.user.id;
  },
);
