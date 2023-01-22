import { Injectable, BadRequestException } from '@nestjs/common';
import { UserModel } from './model/user.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: UserModel[] = [];

  getUsers() {
    return this.users;
  }

  getUserByFullName(full_name: string) {
    return this.users.find((user) => user.full_name === full_name);
  }

  createUser({ full_name, platform }: CreateUserDto) {
    if (this.getUserByFullName(full_name)) {
      throw new BadRequestException('User with the same name already exist.');
    }
    const user = new UserModel({ full_name, platform });
    this.users.push(user);
    return user;
  }

  deleteUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
