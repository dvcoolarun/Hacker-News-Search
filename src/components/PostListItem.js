import React from 'react';
import PropTypes from 'prop-types';

/* STATELESS POST-LIST-ITEM PAGE USING THE PROPS PASSED */
const PostListItem = ({ post, index }) => {
    return (
        <div className="post-list-item">
          <div className="post-title-panel">
            <span className="post-title">
              {post.title}
            </span>
            <span className="post-url">
              {post.url}
            </span>
          </div>
          <div className="post-data-line">
            <span className="post-score">
              {post.score}
            </span>
            <span className="post-user">
              {post.by}
            </span>
            <span className="post-time">
              {post.time}
            </span>
            <span className="post-comments">
              {post.descendants}
            </span>
          </div>
        </div>
    );
};

PostListItem.propTypes = {
    post: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
};

export default PostListItem;
