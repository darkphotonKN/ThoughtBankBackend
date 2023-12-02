import { IsString } from 'class-validator';

export class CreateThoughtDTO {
  @IsString()
  title: string;

  @IsString()
  content: string;
}
