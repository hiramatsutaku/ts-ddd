import { IEquatable } from '../../utils/ValueObject';

interface IUserName extends IEquatable<IUserName> {
  value: string;
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
