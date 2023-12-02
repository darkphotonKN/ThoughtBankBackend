import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Thought } from './entities/thought.entity';
import { Repository } from 'typeorm';
import { CreateThoughtDTO } from './dtos/create-thought.dto';
import { GetThoughtsQueryDTO } from './dtos/get-thought-query-dto';

@Injectable()
export class ThoughtService {
  constructor(@InjectRepository(Thought) private repo: Repository<Thought>) {}

  // get all thoughts
  async getThoughts(query: GetThoughtsQueryDTO) {
    console.log('query:', query);
    const thoughts = await this.repo.find();
    return thoughts;
  }

  // create single thought
  async createThought(body: CreateThoughtDTO) {
    const newThought = {
      title: body.title,
      content: body.content,
    };
    const thought = this.repo.create(newThought);
    await this.repo.save(thought);
    return thought;
  }

  // delete single thought
  async deleteThought(id: string) {
    const thought = await this.repo.findOne({ where: { id } });
    if (!thought) {
      throw new Error('Thought not found');
    }
    await this.repo.remove(thought);

    return thought;
  }
}
