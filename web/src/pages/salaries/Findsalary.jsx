import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Container } from 'react-bootstrap';

import './css/Findsalary.css';
import { images } from '../../assets/constants';
import searchSalary from '../../api/salary/searchSalary';
import SearchSalary from './SearchSalary';
import TopSalary from './TopSalary';
import CustomAutocomplete from '../../components/CustomAutocomplete';
import { whatFilter, whereFilter } from '../../utils/staticData';

const Findsalary = () => {
  const [location, setLocation] = useState('');
  const [title, setTitle] = useState('');
  const [salaryData, setSalaryData] = useState([]);
  const [searchFlag, setSearchFlag] = useState(true);
  const [topSalaries, setTopSalaries] = useState([]);
  const payload = {
    title,
    location,
  };
  useEffect(() => {
    searchSalary(payload).then((response) => {
      if (!response) {
        return;
      }
      setTopSalaries(response.data.nodes);
    });
  }, [payload]);
  const search = (event) => {
    event.preventDefault();
    if (title === '' && location === '') {
      setSearchFlag(true);
      return;
    }
    searchSalary(payload).then((response) => {
      if (!response) {
        return;
      }
      setSearchFlag(false);
      setSalaryData(response.data.nodes);
    });
  };
  return (
    <Container fluid>
      <div
        style={{
          display: 'flex',
          width: '97vw',
          justifyContent: 'flex-start',
          margin: '0 auto',
          paddingLeft: '1rem',
          backgroundColor: '#E8F3FC',
          paddingRight: '1rem',
          paddingBottom: '20px',
          alignItems: 'flex-end',
        }}
      >
        <div
          style={{
            position: 'absolute',
            marginLeft: '220px',
            marginBottom: '30px',
          }}
        >
          <div className="findsalary_header">
            <h1 className="headersalary1">Trouver une carrière que vous aimerez</h1>
            <h2 className="headersalary2">
              Explorer les carrières qui suscitent le plus de satisfaction au travail et
              les meilleurs salaires
            </h2>
          </div>
          <div className="salaryBox" />
          <div>
            <form>
              <div className="findsalary_form">
                <div className="salarylabel">
                  <p className="namesalaryLabel">Quoi</p>
                  <CustomAutocomplete
                    placeholder="Entrez le titre du poste"
                    className="inputLabel"
                    style={{
                      width: '330px',
                      marginLeft: '5px',
                      marginTop: '10px',
                    }}
                    variant="outlined"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    // setValue={setTitle}
                    options={whatFilter}
                    endAdornment={(
                      <div style={{ marginRight: '15px', marginTop: '5px' }}>
                        <SearchIcon className="iconsinput" />
                      </div>
                    )}
                  />
                </div>
                <div className="salarylabel">
                  <p className="namesalaryLabel">Où</p>
                  <CustomAutocomplete
                    placeholder="Entrez l'emplacement"
                    className="inputLabel"
                    style={{
                      width: '330px',
                      marginLeft: '5px',
                      marginTop: '10px',
                    }}
                    variant="outlined"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    options={whereFilter}
                    endAdornment={(
                      <div style={{ marginRight: '15px', marginTop: '5px' }}>
                        <LocationOnIcon className="iconsinput" />
                      </div>
                    )}
                  />
                </div>
                <button type="submit" className="salaryButton" onClick={search}>
                  Rechercher
                </button>
              </div>
            </form>
          </div>
        </div>
        <img
          src={images.management}
          alt="salary"
          style={{
            marginRight: 0,
            marginLeft: 'auto',
            height: '100%',
            maxHeight: '326px',
            width: '712px',
          }}
        />
      </div>
      {searchFlag ? (
        <SearchSalary salary={topSalaries} />
      ) : (
        <TopSalary salary={salaryData} title={title} location={location} />
      )}
    </Container>
  );
};

export default Findsalary;
