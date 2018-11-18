const Sequelize = require('sequelize');;
const database = 'tmm',
host = 'tmm.c1qsmfd1qtyd.us-east-1.rds.amazonaws.com',
username = 'thomasm1',
password = 'xxxxxxxxxxxxxx';

const pgClient = new Sequelize(database, username, password, {
  host: host,
  dialect: 'postgres'
});

const Pizza = pgClient.define('pizza', {
  id: { type: Sequelize.STRING, primaryKey: true },
  name: { type: Sequelize.STRING },
  toppings: { type: Sequelize.STRING },
  img: { type: Sequelize.STRING },
  username: { type: Sequelize.STRING },
  created: { type: Sequelize.STRING },
  createdAt: { type: Sequelize.STRING },
  updatedAt: { type: Sequelize.STRING },
});

Pizza.sync().then(() => {
  console.log('Postgres Connection Ready....');
});

module.exports = Pizza;