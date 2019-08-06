import React from 'react';
import Time from 'Time';
import PropTypes from 'prop-types';

/* STATELESS POST-LIST-ITEM PAGE USING THE PROPS PASSED */
const PostListItem = ({ post, index }) => {
    return (
        <div className="post-list-item">
          <div className="post-title-panel">
            <a className="post-title">
              {post.title}
            </a>
          </div>
          <div className="post-data-line">
            <span className="post-score">
              {post.score}
            </span>
            <span className="post-user">
              {post.by}
            </span>
            <Time time={post.time}/>
            <span className="post-comments">
              {post.descendants}
            </span>
            <span className="post-url">
              {post.url}
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
