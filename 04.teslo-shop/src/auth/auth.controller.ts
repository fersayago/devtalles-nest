import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoginUserDto, CreateUserDto } from './dto';
import { User } from './entities/user.entity';
import { GetUser, getRawHeaders } from './decorators';
import { UserRoleGuard } from './guards/user-role/user-role.guard';
import { RoleProtected } from './decorators/role-protected.decorator';
import { ValidRoles } from './interfaces';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Get('private')
  @UseGuards(AuthGuard())
  testingPrivateRoute(
    // @Req() request: Express.Request
    @GetUser() user: User,
    @GetUser('email') userEmail: string,
    @getRawHeaders() rawHeaders: string[],
  ) {
    return {
      ok: true,
      message: 'Hola mundo private',
      user,
      userEmail,
      rawHeaders,
    };
  }

  //@SetMetadata('roles', ['admin', 'super-user'])
  @Get('private2')
  @RoleProtected(ValidRoles.admin)
  @UseGuards(AuthGuard(), UserRoleGuard)
  privateROute2(@GetUser() user: User) {
    return {
      ok: true,
      user,
    };
  }
}
