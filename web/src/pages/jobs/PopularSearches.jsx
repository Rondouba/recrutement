/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from 'react-router';
import './css/Search.css';

const PopularSearches = () => {
  const history = useHistory();
  return (
    <div style={{ marginTop: '30px' }}>
      <hr className="separatingLine" />
      <div className="search">
        <div>
          <h2 className="searchHeader">Recherches populaires</h2>
        </div>
        <div className="searchOptions">
          <div
            className="option"
            onClick={() => {
              const params = new URLSearchParams({
                jobs: 'Intern',
              }); history.push({ pathname: '/', search: `${params.toString()}` });
            }}
          >
            <SearchIcon
              className="optionIcon"
              style={{ fontSize: '1.2rem', fontWeight: '100' }}
            />
            <p className="optionType">Interne</p>
          </div>
          <div
            className="option"
            onClick={() => {
              const params = new URLSearchParams({
                jobs: 'Full Stack',
              }); history.push({ pathname: '/', search: `${params.toString()}` });
            }}
          >
            <SearchIcon
              className="optionIcon"
              style={{ fontSize: '1.2rem', fontWeight: '100' }}
            />
            <p className="optionType">Full stack</p>
          </div>
          <div
            className="option"
            onClick={() => {
              const params = new URLSearchParams({
                jobs: 'Receptionist',
              }); history.push({ pathname: '/', search: `${params.toString()}` });
            }}
          >
            <SearchIcon
              className="optionIcon"
              style={{ fontSize: '1.2rem', fontWeight: '100' }}
            />
            <p className="optionType">Réceptionniste</p>
          </div>
          <div
            className="option"
            onClick={() => {
              const params = new URLSearchParams({
                jobs: 'Facebook',
              }); history.push({ pathname: '/', search: `${params.toString()}` });
            }}
          >
            <SearchIcon
              className="optionIcon"
              style={{ fontSize: '1.2rem', fontWeight: '100' }}
            />
            <p className="optionType">Facebook</p>
          </div>
          <div
            className="option"
            onClick={() => {
              const params = new URLSearchParams({
                jobs: 'Google',
              }); history.push({ pathname: '/', search: `${params.toString()}` });
            }}
          >
            <SearchIcon
              className="optionIcon"
              style={{ fontSize: '1.2rem', fontWeight: '100' }}
            />
            <p className="optionType">Google</p>
          </div>
        </div>
        <div className="searchOptions">
          <div
            className="option"
            onClick={() => {
              const params = new URLSearchParams({
                jobs: 'Teacher',
              }); history.push({ pathname: '/', search: `${params.toString()}` });
            }}
          >
            <SearchIcon
              className="optionIcon"
              style={{ fontSize: '1.2rem', fontWeight: '100' }}
            />
            <p className="optionType">Professeur</p>
          </div>
          <div
            className="option"
            onClick={() => {
              const params = new URLSearchParams({
                jobs: 'Landscaping',
              }); history.push({ pathname: '/', search: `${params.toString()}` });
            }}
          >
            <SearchIcon
              className="optionIcon"
              style={{ fontSize: '1.2rem', fontWeight: '100' }}
            />
            <p className="optionType">Aménagement paysager</p>
          </div>
          <div
            className="option"
            onClick={() => {
              const params = new URLSearchParams({
                jobs: 'Daycare',
              }); history.push({ pathname: '/', search: `${params.toString()}` });
            }}
          >
            <SearchIcon
              className="optionIcon"
              style={{ fontSize: '1.2rem', fontWeight: '100' }}
            />
            <p className="optionType">Garderie</p>
          </div>
          <div
            className="option"
            onClick={() => {
              const params = new URLSearchParams({
                jobs: 'Airport',
              }); history.push({ pathname: '/', search: `${params.toString()}` });
            }}
          >
            <SearchIcon
              className="optionIcon"
              style={{ fontSize: '1.2rem', fontWeight: '100' }}
            />
            <p className="optionType">Aéroport</p>
          </div>
          <div
            className="option"
            onClick={() => {
              const params = new URLSearchParams({
                jobs: 'Dental Assistant',
              }); history.push({ pathname: '/', search: `${params.toString()}` });
            }}
          >
            <SearchIcon
              className="optionIcon"
              style={{ fontSize: '1.2rem', fontWeight: '100' }}
            />
            <p className="optionType">Assistant dentaire</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularSearches;
