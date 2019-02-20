import React from 'react';
import { Link } from 'react-router-dom';
import CountriesListItem from './CountriesListItem'
import { getComments } from '../actions';

const CountriesList = ({ countries }) => {
  const renderCountries = countries.map(country =>
    <CountriesListItem country={country}  key={country.id}/>
  );
    

  return (
    <div>
      <div>
      <h1>World Happiness Rankings</h1>
        <table className="countryTable">
          <tr>
            <th>Rank</th>
            <th>Country</th>
            <th>Happiness Score</th>
          </tr>
          {/* <Link to={`/countries/${id}`}></Link> */}
          {renderCountries}
        </table>
      </div> 
    </div>
  );
};

export default CountriesList;