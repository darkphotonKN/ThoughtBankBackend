import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Thought {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;
}
