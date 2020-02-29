import { IEquatable } from '../../../utils/types';
import { UserId } from '../UserId';
import { UserName } from '../UserName';
import { UserMailAddress } from '../UserMailAddress';

interface IUser extends IEquatable<IUser> {
  readonly id: UserId;
  changeName: (name: UserName) => void;
}

export class User implements IUser {
  readonly id: UserId;

  name: UserName;

  mailAddress?: UserMailAddress;

  constructor(id: UserId, name: UserName, mailAddress?: UserMailAddress) {
    this.id = id;
    this.name = name;
    this.mailAddress = mailAddress;
  }

  equal(target: IUser): boolean {
    return this.id === target.id;
  }

  changeName(name: UserName): void {
    this.name = name;
  }

  changeMailAddress(mailAddress: UserMailAddress): void {
    this.mailAddress = mailAddress;
  }
}
