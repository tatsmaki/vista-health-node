import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('users')
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post('user')
  createUser(@Body() body: CreateUserDto) {
    return this.usersService.createUser(body);
  }
}
