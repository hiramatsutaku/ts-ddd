import { User } from '../User';

export class UserService {
  static exists(user: User): boolean {
    // eslint-disable-next-line no-console
    console.log(user);
    return false;
  }
}
