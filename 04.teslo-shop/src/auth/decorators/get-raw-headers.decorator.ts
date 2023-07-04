import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const getRawHeaders = createParamDecorator(
  (data, context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest();
    return req.rawHeaders;
  },
);
