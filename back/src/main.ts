import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setup } from 'src/setup';

const PORT = 3001

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);

  await setup(app)

  console.log('Listening on ', PORT)
}
bootstrap();
