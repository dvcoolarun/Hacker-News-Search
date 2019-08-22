import React from 'react';
import PropTypes from 'prop-types';
import PostListItem from 'PostListItem';
import { AppContext } from '../containers/App.js';

/* STATELESS POSTLIST PAGE USING LIST PROP */
const PostList = () => (
    <AppContext.Consumer>
      {({
          posts_data
      }) => (
          <div className="post-list">
            {posts_data.map((post, index)=> (
                <PostListItem key={post.objectID} index={index} post={post}/>
            ))}
          </div>
      )}
    </AppContext.Consumer>
);

PostList.propTypes = {
    posts_data: PropTypes.array.isRequired
};

export default PostList;
