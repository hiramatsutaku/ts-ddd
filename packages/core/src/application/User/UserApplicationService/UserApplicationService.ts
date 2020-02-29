import { UserService } from '../../../domain/services';
import { IUserRepository, User, UserId, UserName } from '../../../domain/models/User';

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
    if (this.userService.exists(user)) {
      throw new Error('User exists.');
    }
    await this.userRepository.save(user);
  }
}
