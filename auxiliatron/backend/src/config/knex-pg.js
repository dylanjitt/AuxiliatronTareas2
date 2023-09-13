require("dotenv").config();
const pgConfig = {
  development: {
    client: "pg",
    connection: {
      //TODO: jalar desde local ENV
      host: "dpg-cjeftkmnk9qs73afl9q0-a.oregon-postgres.render.com",
      user: "doegojitton",
      password: "7zorzp3v3445hAUfpUnl3KBoLrZHuOxb",
      database: "auxiliatron_sqgf",
      ssl: { rejectUnauthorized: true },
    },
    migrations: {
      directory: '../db/migrations'
    },
  },
};

module.exports = pgConfig;
