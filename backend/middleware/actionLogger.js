const { appendActionLog } = require('../utils/audit');

const actionLogger = (req, res, next) => {
  if (!req.originalUrl.startsWith('/api/')) {
    return next();
  }

  res.on('finish', () => {
    const actor = req.user || req.auditActor || null;

    if (req.auditAction === 'LOGIN_SUCCESS' || req.auditAction === 'SUPERVISOR_LOGIN_SUCCESS') {
      appendActionLog(`LOGIN | ${actor?.email || 'unknown user'} logged in`);
    }
  });

  return next();
};

module.exports = { actionLogger };
