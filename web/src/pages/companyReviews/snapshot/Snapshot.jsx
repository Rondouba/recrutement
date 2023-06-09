/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import CompanyAbout from './CompanyAbout';
// import Reviews from './Reviews';
// import Salaries from './Salaries';
import WorkHappiness from './WorkHappiness';

function Snapshot(props) {
  return (
    <>
      <p style={{ fontSize: '12px', color: '#6f6f6f' }}>
        {' '}
        Travaille à
        {' '}
        Facebook: Emplois et carrière
      </p>
      <WorkHappiness data={props.data} />
      <CompanyAbout data={props.data} />
      {/* <Salaries salaries={props.salaries} flag={false} /> */}
      {/* <Reviews reviews={props.reviews} /> */}
    </>
  );
}

export default Snapshot;
