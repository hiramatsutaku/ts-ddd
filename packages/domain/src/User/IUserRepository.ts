import { User } from './User';
import { UserId } from './UserId';

export interface IUserRepository {
  save: (user: User) => void;
  findById: (userId: UserId) => User | null;
}
