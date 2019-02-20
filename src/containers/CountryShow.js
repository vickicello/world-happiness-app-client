import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CommentsList from '../components/CommentsList';
import CommentNew from './CommentNew';
import { getComments } from '../actions';

class CountryShow extends Component {
  componentDidMount() {
    this.props.getComments(this.props.match.params.countryId);
  }

  render() {
    const { country, match, history } = this.props;
    return (
      <div className="countryCard">
          <h1>{country.country}</h1>
          <h2>Happiness Ranking: {country.happiness_rank}</h2>
          <p>Happiness Score: {country.happiness_score}</p>

       <CommentNew countryId={this.props.match.params.countryId}/>
       <CommentsList comments={this.props.comments} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = +ownProps.match.params.countryId
  const country = state.countries.countries.find(country => country.id === id) || {}
  return ({
    country: country,
    comments: state.comments.comments
  })
}

export default connect(mapStateToProps, {getComments})(CountryShow);