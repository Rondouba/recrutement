import { getCookie } from 'react-use-cookie';

// const dotenv = require('dotenv');
// const path = require('path');
const jwt = require('jsonwebtoken');

// dotenv.config({ path: path.join(__dirname, '../.env') });
const REACT_TOKEN_SECRET = process.env.TOKEN_SECRET;
const getLoginDetails = () => {
  const token = getCookie('token');

  try {
    const decoded = jwt.decode(token, String(REACT_TOKEN_SECRET));
    return decoded;
  } catch (err) {
    return {};
  }
};

export default getLoginDetails;
