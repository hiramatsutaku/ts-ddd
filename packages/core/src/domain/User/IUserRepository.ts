import { User } from './User';
import { UserId } from './UserId';

export interface IUserRepository {
  save: (user: User) => Promise<void>;
  findById: (userId: UserId) => Promise<User | null>;
}
