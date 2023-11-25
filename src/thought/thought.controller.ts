import { Controller, Get, Query } from '@nestjs/common';
import { ThoughtService } from './thought.service';
import { GetThoughtsQueryDTO } from './dtos/get-thought-query-dto';

@Controller('/thoughts')
export class ThoughtController {
  constructor(private readonly thoughtService: ThoughtService) {}

  @Get()
  getThoughts(@Query() query: GetThoughtsQueryDTO) {
    console.log('query:', query);

    return {
      data: [
        {
          id: 1,
          title: 'title 1',
          content: 'This is content 1.',
        },
        {
          id: 2,
          title: 'title 2',
          content: 'This is content 2.',
        },
      ],
    };
  }
}
