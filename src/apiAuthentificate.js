import { credentials } from './config';

const crypto = require('crypto');

const apiAuthentificate = (() => {
  const cipher = crypto.createCipher('aes-256-cbc', credentials.key);
  let crypted = cipher.update(credentials.password, 'utf-8', 'hex');
  crypted += cipher.final('hex');

  return {
    user: 'client',
    token: crypted,
    'Content-Type': 'application/json',
  };
})();

export default apiAuthentificate;
