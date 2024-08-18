const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Student = require('./student');

const Grade = sequelize.define('Grade', {
  m_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  m_math: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  m_physic: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  m_chemistry: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  m_student_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Student, // Tham chiếu đến model Student
      key: 'm_id'
    },
    allowNull: false
  }
}, {
  tableName: 'grade',
  timestamps: false
});

// Thiết lập mối quan hệ với Student
Grade.belongsTo(Student, { foreignKey: 'm_student_id' });
Student.hasMany(Grade, { foreignKey: 'm_student_id' });

module.exports = Grade;