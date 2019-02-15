import React, { Component } from 'react';
import Countries from './components/Countries';
import CountryService from './services/CountryService';
import './App.css';

let countries = [
  { country: 'France', id: 1 },
  { country: 'Peru', id: 2 },
  { country: 'USA', id: 4 }
]
class App extends Component {
  contructor() {
    super() 
      this.state = {
        countries: []
      }

    componentDidMount() {
      CountryService.fetchCountries().then(countries => this.setState({ countries }))
    }
  }

  render() {
    return (
      <div className="App">
        <div className="navbar">
          <p>Check out my navbar!</p>
          {/* <Navbar /> */}
        </div>
        <div className="main-content">
          <p>Check out my main content!</p>
          <Countries countries={countries}/>
        </div>
      </div>
    );
  }
}

export default App;
