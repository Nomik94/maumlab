import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum Gender {
  MAN = 'man',
  WOMAN = 'woman',
}
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  age: number;

  @Column({ type: 'enum', enum: Gender, default: Gender.MAN })
  gender: Gender;
}
