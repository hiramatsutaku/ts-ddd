import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('users')
export class TOUserEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
