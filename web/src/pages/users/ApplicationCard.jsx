/* eslint-disable react/prop-types */
import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import ApplicationSVG from '../../components/svg/ApplicationSVG';
import './css/ApplicationCard.css';

const ApplicationCard = ({ application }) => {
  const date1 = new Date(application.date);
  const date2 = new Date();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <>
      <Card className="application-card">
        <CardContent>
          <div className="application-card-container">
            <div className="application-card-left">
              <div className="application-card-icon">
                <ApplicationSVG />
              </div>
              <div
                className="application-card-info"
              >
                <span className="application-card-title">{application.title}</span>
                <span className="application-card-company">Google</span>
                <span className="application-card-location">
                  {application.job ? application.job.city : ''}
                  ,
                  {' '}
                  {application.job ? application.job.state : ''}
                </span>
                <span className="application-card-date">{`${diffDays} days ago`}</span>
              </div>
            </div>
            <div className="application-card-right">
              <span className="application-card-status-label">État de la candidature:</span>
              <span>
                {' '}
                {application.status}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ApplicationCard;
