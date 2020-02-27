import { UserService } from './UserService';
import { UserId } from '../UserId';
import { UserName } from '../UserName';
import { User } from '../User/User';

describe('UserService', () => {
  describe('method', () => {
    describe('exists', () => {
      it('return true if equal', () => {
        const userId = new UserId(1);
        const userName = new UserName('hoge');
        const user = new User(userId, userName);
        expect(UserService.exists(user)).toBe(false);
      });
    });
  });
});
