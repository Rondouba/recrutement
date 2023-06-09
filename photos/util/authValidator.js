/* eslint-disable consistent-return */
const axios = require('axios');

if (!global.gConfig.auth_url) {
  console.error('veuillez fournir auth_url dans le fichier de configuration...');
}

const validate = async (token) => {
  try {
    const response = await axios.get(`${global.gConfig.auth_url}/auth/validate?token=${token}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = validate;
