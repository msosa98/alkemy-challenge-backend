module.exports = {
  database_host: process.env.DATABASE_HOST || "localhost",
  database_name: process.env.DATABASE_NAME || "alkemy",
  database_user: process.env.DATABASE_USER || "root",
  database_password: process.env.DATABASE_PASSWORD || "",
  database_dialect: process.env.DATABASE_DIALECT || "mysql",
  port: process.env.PORT || 4000,
  jwt_secret: process.env.JWT_SECRET || "my_jwt_secret",
};
