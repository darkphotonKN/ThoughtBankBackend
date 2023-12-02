import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Thought {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;
}
