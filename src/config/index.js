module.exports = {
  DATABASE_HOST: process.env.DATABASE_HOST || "localhost",
  DATABASE_NAME: process.env.DATABASE_NAME || "alkemy",
  DATABASE_USER: process.env.DATABASE_USER || "root",
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || "",
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || "mysql",
  PORT: process.env.PORT || 4000,
  JWT_SECRET: process.env.JWT_SECRET || "my_jwt_secret",
};
