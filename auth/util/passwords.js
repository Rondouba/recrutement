const bcrypt = require('bcryptjs');
const PasswordValidator = require('password-validator');

const getPasswordHash = async (pass) => {
  const hash = await bcrypt.hash(pass, 10);
  return hash;
};

const validatePassHash = async (pass, dbHash) => bcrypt.compare(pass, dbHash);

const schema = new PasswordValidator();
schema
  .is()
  .min(8) // Minimum  8
  .is()
  .max(100) // Maximum  100
  .has()
  .uppercase() // Doit avoir des lettres majuscules
  .has()
  .lowercase() // Doit avoir des lettres miniscules
  .has()
  .digits(1); // Doit avoir au moins 1 chiffres

const validatePassword = (pass) => schema.validate(pass);

module.exports = { getPasswordHash, validatePassHash, validatePassword };
