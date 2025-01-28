import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString, IsBoolean, IsNotEmpty } from 'class-validator';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  title!: string;

  @Column()
  @IsString()
  description!: string;

  @Column({ default: false })
  @IsBoolean()
  completed!: boolean;
}