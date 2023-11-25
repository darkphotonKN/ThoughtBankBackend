import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ThoughtModule } from './thought/thought.module';

@Module({
  imports: [ThoughtModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
