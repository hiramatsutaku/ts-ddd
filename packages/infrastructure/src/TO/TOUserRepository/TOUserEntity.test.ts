import * as uuid from 'uuid';
import { TOUserEntity } from './TOUserEntity';

describe('TOUserEntity', () => {
  test('create instance', () => {
    const id = uuid.v4();
    const name = 'hoge';
    const entity = new TOUserEntity(id, name);
    expect(entity.name).toBe(name);
  });
});
