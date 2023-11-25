import { IsNumber, IsOptional } from 'class-validator';

export class GetThoughtsQueryDTO {
  @IsOptional()
  @IsNumber()
  page: number;

  @IsOptional()
  @IsNumber()
  offset: number;
}
