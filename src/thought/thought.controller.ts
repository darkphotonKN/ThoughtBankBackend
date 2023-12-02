import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { ThoughtService } from './thought.service';
import { GetThoughtsQueryDTO } from './dtos/get-thought-query-dto';
import { CreateThoughtDTO } from './dtos/create-thought.dto';

@Controller('/thoughts')
export class ThoughtController {
  constructor(private readonly thoughtService: ThoughtService) {}

  @Get()
  async getThoughts(@Query() query: GetThoughtsQueryDTO) {
    console.log('query:', query);

    const data = await this.thoughtService.getThoughts(query);

    return { data };
  }

  @Post('/create')
  createThought(@Body() body: CreateThoughtDTO) {
    return this.thoughtService.createThought(body);
  }

  @Delete('/delete')
  async removeThought(@Query('id') id: string) {
    const thoughtRemoved = await this.thoughtService.deleteThought(id);
    return { msg: 'Thought successfully removed', data: thoughtRemoved };
  }
}
