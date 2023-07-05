import { Reflector } from '@nestjs/core';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class UserRoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // Va a buscar los roles en el setMetadata del controller
    const validRoles: string[] = this.reflector.get(
      'roles',
      context.getHandler(),
    );

    console.log(validRoles);

    return true;
  }
}
