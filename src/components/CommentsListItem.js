import React, {Component} from 'react';

class CommentsListItem extends Component {

  render() {
      const { comment, created_at } = this.props.comment;
        let timeStamp= new Date(created_at);
        let date = timeStamp.toLocaleString()
    return(
        <div className="commentCard" header={date}>{comment}</div>
    )
  }
}

export default CommentsListItem;