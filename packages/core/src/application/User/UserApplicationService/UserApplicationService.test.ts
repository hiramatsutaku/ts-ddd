import * as uuid from 'uuid';
import { TOUserRepository } from '@ts-ddd/infrastructure';
import { UserApplicationService } from './UserApplicationService';
import { UserService } from '../../../domain/services';
import { IUserRepository, UserId, User, UserName } from '../../../domain/models/User';

jest.mock('@ts-ddd/infrastructure');

describe('UserApplicationService', () => {
  let userApplicationService: UserApplicationService;
  let registeredId: string;
  let registeredName: string;
  let newId: string;
  let findByIdMock: jest.MockInstance<
    ReturnType<IUserRepository['findById']>,
    Parameters<IUserRepository['findById']>
  >;
  let saveMock: jest.MockInstance<
    ReturnType<IUserRepository['save']>,
    Parameters<IUserRepository['save']>
  >;

  beforeEach(() => {
    registeredId = uuid.v4();
    newId = uuid.v4();
    findByIdMock = jest.fn();
    findByIdMock.mockImplementation((userId: UserId) => {
      if (userId.value !== registeredId) {
        return Promise.resolve(null);
      }
      return Promise.resolve(new User(new UserId(registeredId), new UserName(registeredName)));
    });
    saveMock = jest.fn();
    (TOUserRepository as jest.Mock).mockImplementation(() => {
      return { findById: findByIdMock, save: saveMock };
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
        await userApplicationService.register(newId, 'userName');
        expect(saveMock.mock.calls[0][0] instanceof User).toBe(true);
      });

      it('throw error if user exists', async () => {
        await expect(userApplicationService.register(registeredId, 'userName')).rejects.toThrow();
        expect(saveMock.mock.calls[0]).toBeUndefined();
      });
    });

    describe('get', () => {
      test('success', async () => {
        const user = await userApplicationService.get(registeredId);
        expect(user?.id).toEqual(registeredId);
        expect(user?.name).toEqual(registeredName);
      });

      it('return null if user does not exist', async () => {
        await expect(userApplicationService.get(uuid.v4())).resolves.toBeNull();
      });
    });
  });
});
