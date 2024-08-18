const express = require('express');
const db = require('./models');
const classRoutes = require('./routes/class');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', classRoutes);

// Kết nối với database và khởi động server
db.sequelize.authenticate()
  .then(() => {
    console.log('Kết nối thành công với cơ sở dữ liệu');
    return db.sequelize.sync();
  })
  .then(() => {
    app.listen(3000, () => {
      console.log('Server đang chạy trên cổng 3000');
    });
  })
  .catch(err => {
    console.error('Không thể kết nối với cơ sở dữ liệu:', err);
  });
