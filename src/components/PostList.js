import React from 'react';
import PropTypes from 'prop-types';
import PostListItem from 'PostListItem';

/* STATELESS POSTLIST PAGE USING LIST PROP */
const PostList = ({ posts_data }) => {
    return (
        <div className="post-list">
            {posts_data.map((post, index)=> (
                <PostListItem key={post.objectID} index={index} post={post}/>
            ))}
        </div>
    );
};

PostList.propTypes = {
    posts_data: PropTypes.array.isRequired
};

export default PostList;
