import React, { Component } from 'react';
import { connect } from 'react-redux';                                          
import { createComment } from '../actions';

class CommentNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
      country_id: +this.props.countryId
    };
  }

  handleOnChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createComment(this.state);
    this.setState({
      comment: ''
    });
  }

  render() {
    return (
      <div>
        <h1>Submit a Comment:</h1>
        <form onSubmit={this.handleOnSubmit} >
          <input
            className="form-control"
            // style={{ border: 'none' }}
            type="text"
            name="comment"
            placeholder="What do you think of this country?"
            value={this.state.comment}
            onChange={this.handleOnChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, {createComment})(CommentNew)