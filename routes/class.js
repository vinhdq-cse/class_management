const express = require('express');
const router = express.Router();

const db = require('../models'); // Import các model

// API để lấy danh sách học sinh
router.get('/students', async (req, res) => {
  try {
    // Truy vấn tất cả các học sinh
    const students = await db.Student.findAll();
    // Trả về kết quả dưới dạng JSON
    res.json(students);
  } catch (error) {
    console.error("Có lỗi xảy ra:", error);
    res.status(500).send("Đã xảy ra lỗi khi lấy danh sách học sinh.");
  }
});

router.get('/students/average', async (req, res) => {
  try {
    // Truy vấn lấy tên và tính điểm trung bình của các môn học
    const students = await db.Student.findAll({
      attributes: [
        'm_name',
        [db.sequelize.literal('ROUND((m_math + m_physic + m_chemistry) / 3, 2)'), 'average_grade']
      ],
      include: [{
        model: db.Grade,
        attributes: []
      }]
    });

    // Trả về kết quả dưới dạng JSON
    res.json(students);
  } catch (error) {
    console.error("Có lỗi xảy ra:", error);
    res.status(500).send("Đã xảy ra lỗi khi lấy tên và điểm trung bình của học sinh.");
  }
});

module.exports = router;