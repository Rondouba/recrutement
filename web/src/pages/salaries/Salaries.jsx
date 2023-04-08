import React from 'react';
import { images } from '../../assets/constants';

const Salaries = () => (
  <div style={{
    display: 'flex', flexDirection: 'column', padding: '1.5rem', boxSizing: 'border-box', alignItems: 'center', justifyContent: 'center', position: 'relative', height: '326px', width: '100%',
  }}
  >
    <div style={{
      boxSizing: 'border-box', margin: '0', display: 'absolute', bottom: '0', right: '0', zIndex: '1', width: '100%',
    }}
    >
      <img
        src={images.management}
        alt="salary"
        style={{
          height: '100%',
          maxHeight: '326px',
          width: '712px',
        }}
      />
    </div>
  </div>
);

export default Salaries;
