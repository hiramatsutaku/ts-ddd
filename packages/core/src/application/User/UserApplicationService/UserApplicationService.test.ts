import * as uuid from 'uuid';
import { TOUserRepository } from '@ts-ddd/infrastructure';
import { UserApplicationService } from './UserApplicationService';
import { UserService } from '../../../domain/services';
import { IUserRepository, UserId, User, UserName } from '../../../domain/models/User';

jest.mock('@ts-ddd/infrastructure');

describe('UserApplicationService', () => {
  let userApplicationService: UserApplicationService;
  let registerdId: string;
  let newId: string;

  beforeAll(() => {
    registerdId = uuid.v4();
    newId = uuid.v4();
    const findByIdMock: jest.MockInstance<
      ReturnType<IUserRepository['findById']>,
      Parameters<IUserRepository['findById']>
    > = jest.fn();
    findByIdMock.mockImplementation((userId: UserId) => {
      if (userId.value === registerdId) {
        return Promise.resolve(null);
      }
      return Promise.resolve(new User(new UserId(registerdId), new UserName('dummy')));
    });
    (TOUserRepository as jest.Mock).mockImplementation(() => {
      return { findById: findByIdMock };
    });
    const userRepositoryMock = new TOUserRepository();
    userApplicationService = new UserApplicationService(
      userRepositoryMock,
      new UserService(userRepositoryMock),
    );
  });

  test('create instance', () => {
    expect(userApplicationService instanceof UserApplicationService).toBe(true);
    expect('userRepository' in userApplicationService).toBe(true);
    expect('userService' in userApplicationService).toBe(true);
  });

  describe('method', () => {
    describe('register', () => {
      test('success', async () => {
        await expect(userApplicationService.register(newId, 'userName')).rejects.toThrow();
      });

      it('throw error if user exists', async () => {
        await expect(userApplicationService.register(registerdId, 'userName')).rejects.toThrow();
      });
    });
  });
});
