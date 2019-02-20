
import React from 'react';
import CommentsListItem from './CommentsListItem'

const CommentsList = ({ comments }) => {

  const renderComments = comments.map(comment =>
    <CommentsListItem comment={comment}  key={comment.id}/>
  );

  return (
    <div className="commentsSection">
      {renderComments}
    </div>
  );
};

export default CommentsList;