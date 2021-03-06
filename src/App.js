import React, { Component } from 'react';
import Countries from './components/Countries';
import CountryService from './services/CountryService';
import Navbar from './components/Navbar';
import About from './components/About';
import './App.css';

class App extends Component {
  constructor () {
    super ();

    this.state = {
      countries: []
    }
  }


  componentDidMount() {
    CountryService.fetchCountries().then(countries => this.setState({ countries }));
  }

  render() {
    // console.log(this.state.countries);
    return (
      <div className="App">
        <div className="navbar">
          <Navbar />
        </div>
        <Switch>
          <Route exact path='/' component={Countries}/>
          <Route exact path='/about' component={About}/>
        </Switch>
        <div className="main-content">
          <Countries countries={this.state.countries} />
        </div>
      </div>
    );
  }
}

export default App;
