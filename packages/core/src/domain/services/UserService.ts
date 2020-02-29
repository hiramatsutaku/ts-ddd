import { User, IUserRepository } from '../models/User';

export class UserService {
  private readonly userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async exists(user: User): Promise<boolean> {
    const duplicatedUser = await this.userRepository.findById(user.id);
    return !!duplicatedUser;
  }
}
