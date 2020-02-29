import * as uuid from 'uuid';
import { UserUpdateCommand } from './UserUpdateCommand';

describe('UserUpdateCommand', () => {
  describe('create instance', () => {
    test('instance to update only name', () => {
      const id = uuid.v4();
      const name = 'hoge';
      const command = new UserUpdateCommand(id, { name });
      expect(command).toEqual({ id, name });
    });
    test('instance to update name & mailAddress', () => {
      const id = uuid.v4();
      const name = 'hoge';
      const mailAddress = 'hogehoge@hirataku.dev';
      const command = new UserUpdateCommand(id, { name, mailAddress });
      expect(command).toEqual({ id, name, mailAddress });
    });
  });
});
