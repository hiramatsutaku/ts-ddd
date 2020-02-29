import { IEquatable } from '../../../utils/types';

interface IUserName extends IEquatable<IUserName> {
  readonly value: string;
}

export class UserName implements IUserName {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
  }

  equal(target: IUserName): boolean {
    return this.value === target.value;
  }
}
