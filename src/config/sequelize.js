import Sequelize from 'sequelize';

const sequelize = new Sequelize('test', 'test', 'test', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;
