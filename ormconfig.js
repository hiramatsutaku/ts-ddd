module.exports = [
  {
    name: 'test',
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE_TEST,
    synchronize: true,
    entities: ['**/TO/**/*Entity.ts'],
    // logging: true,
  },
];
