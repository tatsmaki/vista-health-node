import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function start() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(3002);
}
start();
