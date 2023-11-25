import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // sets the global base route to prefix all apis routes
  app.setGlobalPrefix('/api');

  app.enableCors({
    origin: 'http://localhost:3069', // Replace with your frontend app's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable sending cookies and other credentials
  });

  await app.listen(3000);
}
bootstrap();
