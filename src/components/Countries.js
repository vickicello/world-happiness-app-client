import React from 'react';

const Countries = ({countries}) => {
  const renderCountries = countries.map(country =>
    <p key={country.id}>{country.country}</p>

  )

  return (
    <div>
      {renderCountries}
    </div>
  )
}

export default Countries;