import {
  WebSocketGateway,
  SubscribeMessage,
  WebSocketServer,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { SocketEvents } from 'src/constants/socket-events.constant';
import { UserModel } from './model/user.model';
import { UsersService } from './users.service';

@WebSocketGateway({ namespace: 'users', cors: true })
export class UsersGateway implements OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private readonly usersService: UsersService) {}

  handleDisconnect(client: Socket) {
    const { user } = client.data;
    if (user) {
      this.usersService.deleteUser(user.id);
      this.server.emit(SocketEvents.UserRemoved, user);
    }
  }

  @SubscribeMessage(SocketEvents.UserCreate)
  createUser(client: Socket, user: UserModel) {
    client.data = { user };
    client.broadcast.emit(SocketEvents.UserCreated, user);
  }

  @SubscribeMessage(SocketEvents.UserMove)
  moveUser(client: Socket, data: any) {
    client.broadcast.emit(SocketEvents.UserMoved, data);
  }
}
