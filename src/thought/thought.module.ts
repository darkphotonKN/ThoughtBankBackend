import { Module } from '@nestjs/common';
import { ThoughtController } from './thought.controller';
import { ThoughtService } from './thought.service';
import { Thought } from './entities/thought.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Thought])],
  controllers: [ThoughtController],
  providers: [ThoughtService],
})
export class ThoughtModule {}
