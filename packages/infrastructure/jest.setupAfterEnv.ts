import { createConnection, getConnectionOptions, Connection } from 'typeorm';

let connection: Connection;

beforeAll(async done => {
  try {
    const option = await getConnectionOptions(process.env.NODE_ENV);
    connection = await createConnection(option);
    done();
  } catch (e) {
    await connection?.close();
    // eslint-disable-next-line no-console
    console.log(e);
  }
});

afterAll(async done => {
  try {
    await connection?.close();
    done();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
});
