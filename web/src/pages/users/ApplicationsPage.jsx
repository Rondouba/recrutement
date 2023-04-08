/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import getUserApplications from '../../api/application/getUserApplications';
import ApplicationCard from './ApplicationCard';

const ApplicationsPage = () => {
  const [applications, setApplications] = useState([]);

  const user = useSelector((state) => state.user.user.id);

  useEffect(() => {
    getUserApplications(user).then((res) => {
      setApplications(res.data.nodes);
    });
  }, []);

  return (
    <div style={{ margin: '30px' }}>
      <Typography fontSize={26} fontWeight="bold" marginBottom="15px">
        Vos emplois appliqués
      </Typography>
      <div>
        {applications && applications.length
          ? applications.map((application, index) => <ApplicationCard key={index} application={application} />)
          : null}
      </div>
    </div>
  );
};

export default ApplicationsPage;
