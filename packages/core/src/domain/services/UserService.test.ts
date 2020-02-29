import * as uuid from 'uuid';
import { TOUserRepository } from '@ts-ddd/infrastructure';
import { UserService } from './UserService';
import { UserId } from '../models/User/UserId';
import { UserName, User, IUserRepository } from '../models/User';

jest.mock('@ts-ddd/infrastructure');

describe('UserService', () => {
  describe('method', () => {
    describe('exists', () => {
      it('return true if equal', async () => {
        const userId = new UserId(uuid.v4());
        const userName = new UserName('hoge');
        const user = new User(userId, userName);
        const findByIdMock: jest.MockInstance<
          ReturnType<IUserRepository['findById']>,
          Parameters<IUserRepository['findById']>
        > = jest.fn();
        findByIdMock.mockResolvedValueOnce(null);
        (TOUserRepository as jest.Mock).mockImplementation(() => {
          return { findById: findByIdMock };
        });
        const userRepositoryMock = new TOUserRepository();
        const userService = new UserService(userRepositoryMock);
        expect(await userService.exists(user)).toBe(false);
        expect(findByIdMock).toBeCalled();
        expect(findByIdMock.mock.calls[0][0]).toEqual(userId);
      });
    });
  });
});
