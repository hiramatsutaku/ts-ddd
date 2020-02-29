import * as uuid from 'uuid';
import { UserData } from './UserData';
import { UserId, User, UserName } from '../../../domain/models/User';

describe('UserData', () => {
  test('create instance', () => {
    const userId = new UserId(uuid.v4());
    const userName = new UserName('hoge');
    const user = new User(userId, userName);
    const userData = new UserData(user);
    expect(userData instanceof UserData).toBe(true);
    expect(userData.id).toBe(userId.value);
    expect(userData.name).toBe(userName.value);
  });
});
