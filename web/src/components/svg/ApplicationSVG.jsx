/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../css/ApplicationSVG.css';

const ApplicationSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    role="img"
    className="atw-Icon css-op3873 application-icon"
    aria-hidden="true"
    aria-label="Icone de l'application"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M3.5 3a.5.5 0 00-.5.5v17a.5.5 0 00.5.5H6v-6h5v6h9.5a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5H14V3.5a.5.5 0 00-.5-.5h-10zM5 9h7v1H5V9zm7-3H5v1h7V6z"
      clipRule="evenodd"
    />
  </svg>
);

export default ApplicationSVG;
