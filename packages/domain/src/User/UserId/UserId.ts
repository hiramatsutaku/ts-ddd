import { IEquatable } from '../../utils/types';

interface IUserId extends IEquatable<IUserId> {
  value: number;
}

export class UserId implements IUserId {
  readonly value: number;

  constructor(value: number) {
    this.value = value;
  }

  equal(target: IUserId): boolean {
    return this.value === target.value;
  }
}
