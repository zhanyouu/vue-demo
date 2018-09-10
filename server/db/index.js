const Sequelize=require('sequelize')

const sequelize = new Sequelize('solar_cell', 'postgres', 123456, {
  host:'localhost',
  dialect: 'postgres',
  operatorsAliases: false,
	port: '5432',
  pool: {
    max: 30,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})
//测试数据库连接
sequelize
  .authenticate()
  .then(() => {
    console.log('Database(postgresql) connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
	})

module.exports = sequelize