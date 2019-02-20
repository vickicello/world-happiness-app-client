import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CountriesListItem extends Component {

  render() {
    return(
      <div>  
        <tr>
          <td key={this.props.country.id}>{this.props.country.happiness_rank}</td>
          <td><Link key={this.props.country.id} to={`/countries/${this.props.country.id}`}>{this.props.country.country}</Link></td>
          <td>{this.props.country.happiness_score}</td>
        </tr>
      </div>    
    )
  }
}

const mapStateToProps = (state) => {
  return {
    countries: state.countries
  }
}

export default connect(mapStateToProps)(CountriesListItem);