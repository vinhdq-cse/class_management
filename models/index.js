const { Sequelize } = require('sequelize'); // Import Sequelize
const sequelize = require('../config/database'); // Import kết nối cơ sở dữ liệu

const db = {};

db.Sequelize = Sequelize; 
db.sequelize = sequelize;

// Thêm các model
db.Student = require('./student');
db.Grade = require('./grade');
db.Student.hasMany(db.Grade, { foreignKey: 'm_student_id' });
db.Grade.belongsTo(db.Student, { foreignKey: 'm_student_id' });

module.exports = db;