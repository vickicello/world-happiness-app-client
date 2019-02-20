import React, { Component } from 'react';
import { Route, Switch  } from 'react-router-dom';
import '../App.css';
import { connect } from 'react-redux';
import CountriesList from '../components/CountriesList';
import CountryShow from './CountryShow';
import { Link } from 'react-router-dom';

class CountriesPage extends Component {

  render() {
    const { countries, match } = this.props;

    return (
      <div>
        <Switch>
          <Route exact path={match.url} render={() => (
            <CountriesList countries={countries} />
          )}/>
          <Route exact path={`${match.url}/:countryId`} component={CountryShow}/>
        </Switch>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return ({
    countries: state.countries
  });
}

export default connect(mapStateToProps)(CountriesPage);