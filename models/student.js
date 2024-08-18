const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Import kết nối cơ sở dữ liệu

const Student = sequelize.define('Student', {
  m_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  m_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  m_gender: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'student',
  timestamps: false
});

module.exports = Student;
