const bcrypt = require('bcryptjs');
const db = require('../config/db');

const getSupervisorConfig = () => {
  const name = String(process.env.SUPERVISOR_NAME || 'Emergency Supervisor').trim();
  const email = String(process.env.SUPERVISOR_EMAIL || '').trim().toLowerCase();
  const password = String(process.env.SUPERVISOR_PASSWORD || '').trim();

  if (!email || !password) {
    return null;
  }

  return { name, email, password };
};

const ensureSupervisorAccount = async () => {
  const supervisor = getSupervisorConfig();
  if (!supervisor) {
    console.warn('Supervisor account sync skipped: SUPERVISOR_EMAIL or SUPERVISOR_PASSWORD is missing.');
    return;
  }

  await db.query(
    "ALTER TABLE users MODIFY COLUMN role ENUM('admin','supervisor','college') NOT NULL DEFAULT 'college'"
  );

  const passwordHash = await bcrypt.hash(supervisor.password, 10);
  await db.query(
    `INSERT INTO users (name, email, password, role, college_name)
     VALUES (?, ?, ?, 'supervisor', NULL)
     ON DUPLICATE KEY UPDATE
       name = VALUES(name),
       password = VALUES(password),
       role = VALUES(role),
       college_name = VALUES(college_name)`,
    [supervisor.name, supervisor.email, passwordHash]
  );
};

module.exports = {
  ensureSupervisorAccount,
};
