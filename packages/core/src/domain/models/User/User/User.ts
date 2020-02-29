import { IEquatable } from '../../../utils/types';
import { UserId } from '../UserId';
import { UserName } from '../UserName';

interface IUser extends IEquatable<IUser> {
  readonly id: UserId;
  changeName: (name: UserName) => void;
}

export class User implements IUser {
  readonly id: UserId;

  name: UserName;

  constructor(id: UserId, name: UserName) {
    this.id = id;
    this.name = name;
  }

  equal(target: IUser): boolean {
    return this.id === target.id;
  }

  changeName(name: UserName): void {
    this.name = name;
  }
}
