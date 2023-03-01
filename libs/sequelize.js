const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setupModels = require('./../db/models');


const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
// connectcion a mysql
//const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  //coneccion a mysql
  //dialect: 'mysql',
  dialect: 'postgres',
  logging: true,
});

setupModels(sequelize);

//manejo de migraciones con sequelizeORM
//sequelize.sync();

module.exports = sequelize;

