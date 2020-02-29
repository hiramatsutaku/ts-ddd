import * as uuid from 'uuid';
import { User, UserId, UserName } from '@ts-ddd/core';
import { TOUserRepository } from './TOUserRepository';

describe('TOUserRepository', () => {
  let repo: TOUserRepository;
  let entity: User;

  beforeAll(() => {
    repo = new TOUserRepository();
    const name = 'hoge';
    const userId = new UserId(uuid.v4());
    const userName = new UserName(name);
    entity = new User(userId, userName);
  });

  test('create instance', () => {
    expect(repo instanceof TOUserRepository).toBe(true);
  });

  test('save', async () => {
    await repo.save(entity);
  });

  test('delete', async () => {
    repo = new TOUserRepository();
    const name = 'hoge';
    const userId = new UserId(uuid.v4());
    const userName = new UserName(name);
    const user = new User(userId, userName);
    await repo.save(user);
    await repo.delete(user);
    expect(await repo.findById(user.id)).toBeNull();
  });
});
