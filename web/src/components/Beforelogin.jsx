import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { useHistory } from 'react-router';
import { AntTab, AntTabs } from './AntTabs';

const Beforelogin = () => {
  const [value, setValue] = useState(0);
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push('/login');
  };

  return (
    <Box width="100%">
      <Box bgcolor="#fff">
        <AntTabs
          value={value}
          onChange={handleChange}
          aria-label="ant example"
        >
          <AntTab label="CV" />
          <AntTab
            label="Se connecter"
            style={{ color: '#2557a7', fontWeight: '700' }}
          />
          <hr
            style={{
              height: '25px',
              borderTop: '2px solid #ececec',
              marginTop: '35px',
            }}
          />
          <AntTab label="Employeurs" />
        </AntTabs>
        <Box p={3} />
      </Box>
    </Box>
  );
};

export default Beforelogin;
