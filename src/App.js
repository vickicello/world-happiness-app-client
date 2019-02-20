import React, { Component } from 'react';
// import Countries from './components/Countries';
// import CountryService from './services/CountryService';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import CountriesPage from './containers/CountriesPage';
import { fetchAllCountries } from './actions';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="navbar">
            <Navbar />
          </div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/countries' component={CountriesPage}/>
            <Route exact path='/about' component={About}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
