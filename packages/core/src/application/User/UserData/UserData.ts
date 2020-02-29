import { User } from '../../../domain/models/User';

export class UserData {
  public id: string;

  public name: string;

  constructor(source: User) {
    this.id = source.id.value;
    this.name = source.name.value;
  }
}
