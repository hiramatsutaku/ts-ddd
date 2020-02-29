import * as uuid from 'uuid';
import { User } from './User';
import { UserId } from '../UserId';
import { UserName } from '../UserName';

describe('User', () => {
  test('create instance', () => {
    const id = uuid.v4();
    const name = 'hoge';
    const userId = new UserId(id);
    const userName = new UserName(name);
    const user = new User(userId, userName);
    expect('equal' in user).toBe(true);
  });

  describe('method', () => {
    describe('equal', () => {
      it('return true if equal', () => {
        const id = uuid.v4();
        const userId = new UserId(id);
        const userName1 = new UserName('hoge1');
        const userName2 = new UserName('hoge2');
        const user1 = new User(userId, userName1);
        const user2 = new User(userId, userName2);
        expect(user1.equal(user2)).toBe(true);
      });

      it('return false if not equal', () => {
        const userId1 = new UserId(uuid.v4());
        const userId2 = new UserId(uuid.v4());
        const userName = new UserName('hoge');
        const user1 = new User(userId1, userName);
        const user2 = new User(userId2, userName);
        expect(user1.equal(user2)).toBe(false);
      });
    });
  });
});
