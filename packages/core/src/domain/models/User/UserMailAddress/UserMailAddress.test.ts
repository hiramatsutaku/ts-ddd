import { UserMailAddress } from './UserMailAddress';

describe('UserMailAddress', () => {
  test('create instance', () => {
    const value = 'hoge@hirataku.dev';
    const userMailAddress = new UserMailAddress(value);
    expect(userMailAddress.value).toBe(value);
    expect('equal' in userMailAddress).toBe(true);
  });

  describe('method', () => {
    describe('equal', () => {
      it('return true if equal', () => {
        const value = 'hoge@hirataku.dev';
        const userMailAddress1 = new UserMailAddress(value);
        const userMailAddress2 = new UserMailAddress(value);
        expect(userMailAddress1.equal(userMailAddress2)).toBe(true);
      });

      it('return false if not equal', () => {
        const userMailAddress1 = new UserMailAddress('name1@hirataku.dev');
        const userMailAddress2 = new UserMailAddress('name2@hirataku.dev');
        expect(userMailAddress1.equal(userMailAddress2)).toBe(false);
      });
    });
  });
});
