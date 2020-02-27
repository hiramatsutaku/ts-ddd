import { UserName } from './UserName';

describe('UserName', () => {
  test('create instance', () => {
    const value = 'hoge';
    const userName = new UserName(value);
    expect(userName.value).toBe(value);
    expect('equal' in userName).toBe(true);
  });

  describe('method', () => {
    describe('equal', () => {
      it('return true if equal', () => {
        const value = 'hoge';
        const userName1 = new UserName(value);
        const userName2 = new UserName(value);
        expect(userName1.equal(userName2)).toBe(true);
      });

      it('return false if not equal', () => {
        const userName1 = new UserName('name1');
        const userName2 = new UserName('name2');
        expect(userName1.equal(userName2)).toBe(false);
      });
    });
  });
});
