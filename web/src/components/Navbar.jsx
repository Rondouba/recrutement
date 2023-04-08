/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useHistory } from 'react-router';
import Nav from './Nav';
import NavLeft from './NavLeft';
import Beforelogin from './Beforelogin';
import getLoginDetails from '../utils/getLoginDetails';
import { images } from '../assets/constants';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  logo: {
    width: '115px',
    marginTop: '3px',
    height: '70px',
    marginLeft: '10px',
    cursor: 'pointer',
  },
  navContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100',
  },
  navWrapper: {
    marginLeft: '10px',
    width: '95%',
  },
};
const Navbar = () => {
  const loginDetails = getLoginDetails();
  const decode = loginDetails || null;
  const history = useHistory();

  return (
    <div style={styles.container}>
      <img
        onClick={() => history.push('/')}
        src={images.logo}
        style={styles.logo}
        alt="Khidémé"
      />
      <div
        style={styles.navContainer}
      >
        <div style={styles.navWrapper}>
          <Nav />
        </div>
        <div style={styles.navWrapper}>
          {decode ? <NavLeft /> : <Beforelogin /> }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
