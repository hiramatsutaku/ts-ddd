import { UserService } from '../../../domain/services';
import {
  IUserRepository,
  User,
  UserId,
  UserName,
  UserMailAddress,
} from '../../../domain/models/User';
import { UserData } from '../UserData';
import { UserUpdateCommand } from '../UserUpdateCommand';

export class UserApplicationService {
  readonly userRepository: IUserRepository;

  readonly userService: UserService;

  constructor(userRepository: IUserRepository, userService: UserService) {
    this.userRepository = userRepository;
    this.userService = userService;
  }

  async register(id: string, name: string): Promise<void> {
    const userId = new UserId(id);
    const userName = new UserName(name);
    const user = new User(userId, userName);
    if (await this.userService.exists(user)) {
      throw new Error('User exists.');
    }
    await this.userRepository.save(user);
  }

  async get(id: string): Promise<UserData | null> {
    const userId = new UserId(id);
    const user = await this.userRepository.findById(userId);
    if (!user) {
      return null;
    }
    return new UserData(user);
  }

  async update(command: UserUpdateCommand): Promise<void> {
    const userId = new UserId(command.id);
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new Error('User does not exist.');
    }
    if (command.name) {
      const newName = new UserName(command.name);
      user.changeName(newName);
    }
    if (command.mailAddress) {
      const newMailAddress = new UserMailAddress(command.mailAddress);
      user.changeMailAddress(newMailAddress);
    }
    await this.userRepository.save(user);
  }

  async delete(id: string): Promise<void> {
    const userId = new UserId(id);
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new Error('User does not exist.');
    }
    await this.userRepository.delete(user);
  }
}
