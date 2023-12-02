import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ThoughtService } from './thought.service';
import { GetThoughtsQueryDTO } from './dtos/get-thought-query-dto';
import { CreateThoughtDTO } from './dtos/create-thought.dto';

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
          title: 'We should make an app',
          content:
            'This is some content, really not sure why this is a thought but since we have no other way of filling space, here we are.',
        },
        {
          id: 2,
          title: 'Some thoughts..',
          content: 'What are we doing? Not sure, but we could try',
        },
        {
          id: 3,
          title: 'Thoughts on thoughts..',
          content: 'Is this even a thought? Not sure, but we could try',
        },
        {
          id: 4,
          title: 'Some thoughts..',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl. Donec auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl.',
        },
        {
          id: 5,
          title: 'New app idea!',
          content: 'New app idea, we should make an app!',
        },
      ],
    };
  }

  @Post('/create')
  createThought(@Body() body: CreateThoughtDTO) {
    return this.thoughtService.createThought(body);
  }
}
