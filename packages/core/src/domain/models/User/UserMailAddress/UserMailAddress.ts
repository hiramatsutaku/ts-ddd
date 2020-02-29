import { IEquatable } from '../../../utils/types';

interface IUserMailAddress extends IEquatable<IUserMailAddress> {
  readonly value: string;
}

export class UserMailAddress implements IUserMailAddress {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
  }

  equal(target: IUserMailAddress): boolean {
    return this.value === target.value;
  }
}
