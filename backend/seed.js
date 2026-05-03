const bcrypt = require('bcryptjs');
const path = require('path');
const db = require('./config/db');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const seed = async () => {
  try {
    await db.query(
      "ALTER TABLE users MODIFY COLUMN role ENUM('admin','supervisor','college') NOT NULL DEFAULT 'college'"
    );

    const adminPass = await bcrypt.hash('admin123', 10);
    const collegePass = await bcrypt.hash('college123', 10);
    const users = [
      { name: 'System Admin', email: 'prajwalnavada74@gmail.com', password: adminPass, role: 'admin', college_name: null },
      { name: 'Dr H N National College of Engineering', email: 'prajwal3363@gmail.com', password: collegePass, role: 'college', college_name: 'Dr H N National College of Engineering' },
      { name: 'National College Jayanagar', email: 'college_b@edu.com', password: collegePass, role: 'college', college_name: 'National College Jayanagar' },
      { name: 'National PU College', email: 'college_c@edu.com', password: collegePass, role: 'college', college_name: 'National PU College' },
    ];

    for (const u of users) {
<<<<<<< HEAD
      await db.query(
        'INSERT INTO users (name, email, password, role, college_name) VALUES (?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE name=VALUES(name), password=VALUES(password), role=VALUES(role), college_name=VALUES(college_name)',
        [u.name, u.email, u.password, u.role, u.college_name]
      );
      console.log(`Seeded: ${u.email}`);
=======
      const lookupQuery =
        u.role === 'admin'
          ? 'SELECT id FROM users WHERE role = ? LIMIT 1'
          : 'SELECT id FROM users WHERE role = ? AND college_name = ? LIMIT 1';
      const lookupParams = u.role === 'admin' ? [u.role] : [u.role, u.college_name];
      const [existingRows] = await db.query(lookupQuery, lookupParams);

      if (existingRows.length > 0) {
        await db.query(
          'UPDATE users SET name = ?, email = ?, password = ?, role = ?, college_name = ? WHERE id = ?',
          [u.name, u.email, u.password, u.role, u.college_name, existingRows[0].id]
        );
        console.log(`Updated seeded user: ${u.email}`);
        continue;
      }

      await db.query(
        'INSERT INTO users (name, email, password, role, college_name) VALUES (?, ?, ?, ?, ?)',
        [u.name, u.email, u.password, u.role, u.college_name]
      );
      console.log(`Inserted seeded user: ${u.email}`);
>>>>>>> c54387ea3838b024879634f9fdde57dc60d66c11
    }
  } finally {
    await db.end();
  }
};

seed().catch(err => {
  console.error('Seed failed:', err);
  process.exit(1);
});
