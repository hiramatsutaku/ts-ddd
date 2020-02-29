import { IEquatable } from '../../../utils/types';

interface IUserId extends IEquatable<IUserId> {
  readonly value: string;
}

export class UserId implements IUserId {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
  }

  equal(target: IUserId): boolean {
    return this.value === target.value;
  }
}
