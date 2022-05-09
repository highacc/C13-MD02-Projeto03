const Sequelize = require("sequelize");

const connection = new Sequelize(
  process.env.DATABASE_URL,
  
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnautorized: false,
      },
    },
  }
);

module.exports = connection;
