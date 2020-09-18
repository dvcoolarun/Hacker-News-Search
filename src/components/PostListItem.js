import React from 'react';
import Time from '../components/Time';
import PropTypes from 'prop-types';

/* STATELESS POST-LIST-ITEM PAGE USING THE PROPS PASSED */
const createMarkup = (storyComment) => {
    return (
        {__html: storyComment}
    );
};

const titleCheck = (title, url, post) => {
    if (title && url) {
        return (
            <div className="post-list-item">
              <div className="post-title-panel">
                <a className="post-title" href={post.url}>
                  {post.title}
                </a>
              </div>
              <div className="post-data-line">
                <span className="post-score">
                  {post.points}&nbsp;points
                </span>
                <span className="post-user">
                  {post.author}
                </span>
                <Time time={post.created_at}/>
                <span className="post-comments">
                  {post.num_comments} &nbsp;comments
                </span>
                <span className="post-url">
                  <a href={post.url}>{post.url}</a>
                </span>
              </div>
            </div>
        );
    }
    else {
        return(
            <div className="post-list-item">
              <div className="post-title-panel">
                <a className="post-title" href={post.url}>
                  {post.story_title}
                </a>
              </div>
              <div className="post-data-line">
                <span className="post-score">
                  {post.points}&nbsppoints
                </span>
                <span className="post-user">
                  {post.author}
                </span>
                <Time time={post.created_at}/>
                <span className="post-number-comments">
                  {post.num_comments} &nbsp;comments
                </span>
              </div>
              <div dangerouslySetInnerHTML={createMarkup(post.comment_text)}>
              </div>
            </div>
        );
    }
};

const PostListItem = ({ post, index }) => {
    return (
        titleCheck(post.title, post.url, post)
    );
};

PostListItem.propTypes = {
    post: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
};

export default PostListItem;
