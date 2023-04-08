/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './css/Searchsalary.css';

const SearchSalary = ({ salary }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      maxWidth: '1250px',
      justifyContent: 'center',
      margin: '0 auto',
      alignItems: 'flex-start',
    }}
  >
    <h1 className="searchheader">Parcourir les emplois les mieux rénumérés par secteur </h1>
    <div style={{
      display: 'flex', justifyContent: 'flex-start', width: '100%', flexWrap: 'wrap',
    }}
    >
      {salary.map((option) => (
        <div className="salary">
          <div className="salarydiv">
            <span className="salaryheader">{option.title}</span>
            <div className="salaryAverage">
              <span className="salarytitle">Salaire moyen</span>
              <span className="salaryamount">
                FCFA
                {(option.salary || 0).toLocaleString()}
                Par an
              </span>
            </div>
          </div>
          <div className="salaryskills">
            <span className="salaryjobs">Compétences</span>
            <span className="salaryjobs">Offres d'emploi</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SearchSalary;
