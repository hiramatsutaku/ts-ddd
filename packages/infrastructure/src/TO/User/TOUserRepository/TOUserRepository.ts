import { IUserRepository, User, UserId, UserName } from '@ts-ddd/core';
import { getConnection, Connection } from 'typeorm';
import { TOUserEntity } from './TOUserEntity';

export class TOUserRepository implements IUserRepository {
  private connection: Connection;

  constructor() {
    this.connection = getConnection();
  }

  async findById(id: UserId): Promise<User | null> {
    const userRepository = this.connection.getRepository(TOUserEntity);
    const userRow = await userRepository.findOne(id.value);
    if (!userRow) {
      return null;
    }
    return this.toUser(userRow);
  }

  async save(user: User): Promise<void> {
    const data = this.toTOUserEntity(user);
    const userRepository = this.connection.getRepository(TOUserEntity);
    await userRepository.save(data);
  }

  private toUser(from: TOUserEntity): User {
    if (!from.id) {
      throw new Error('hoge');
    }
    return new User(new UserId(from.id), new UserName(from.name));
  }

  private toTOUserEntity(from: User): TOUserEntity {
    if (!from.id) {
      throw new Error('hoge');
    }
    return new TOUserEntity(from.getName().value);
  }
}
