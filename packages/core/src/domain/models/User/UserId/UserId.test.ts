import * as uuid from 'uuid';
import { UserId } from './UserId';

describe('UserId', () => {
  test('create instance', () => {
    const value = uuid.v4();
    const userId = new UserId(value);
    expect(userId.value).toBe(value);
    expect('equal' in userId).toBe(true);
  });

  describe('method', () => {
    describe('equal', () => {
      it('return true if equal', () => {
        const value = uuid.v4();
        const userId1 = new UserId(value);
        const userId2 = new UserId(value);
        expect(userId1.equal(userId2)).toBe(true);
      });

      it('return false if not equal', () => {
        const userId1 = new UserId(uuid.v4());
        const userId2 = new UserId(uuid.v4());
        expect(userId1.equal(userId2)).toBe(false);
      });
    });
  });
});
