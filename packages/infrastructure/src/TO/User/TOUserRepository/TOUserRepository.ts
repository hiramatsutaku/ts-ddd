import { IUserRepository, User, UserId, UserName } from '@ts-ddd/core';

export class TOUserRepository implements IUserRepository {
  save(user: User): void {
    // eslint-disable-next-line no-console
    console.log(user);
  }

  findById(id: UserId): User {
    // eslint-disable-next-line no-console
    console.log(id);
    return new User(new UserId(1), new UserName('hoge'));
  }
}
