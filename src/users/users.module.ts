import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersGateway } from './users.gateway';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersGateway, UsersService],
})
export class UsersModule {}
