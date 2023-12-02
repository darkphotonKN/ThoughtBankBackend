import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Thought } from './entities/thought.entity';
import { Repository } from 'typeorm';
import { CreateThoughtDTO } from './dtos/create-thought.dto';

@Injectable()
export class ThoughtService {
  constructor(@InjectRepository(Thought) private repo: Repository<Thought>) {}

  async createThought(body: CreateThoughtDTO) {
    const newThought = {
      title: body.title,
      content: body.content,
    };
    const thought = this.repo.create(newThought);
    await this.repo.save(thought);
    return thought;
  }
}
