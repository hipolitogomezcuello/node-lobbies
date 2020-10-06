import Sequelize from 'sequelize';

const sequelize = new Sequelize('node_lobbies', 'dev', 'dev', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;
