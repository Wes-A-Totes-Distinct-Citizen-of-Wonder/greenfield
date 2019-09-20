import React from 'react';
import PropTypes from 'prop-types';
import SearchTag from '../SearchTag.jsx';
import Card from './Card.jsx';

const PostCard = (props) => {
    const { posts, changePostView, user } = props;

    return (
        <div>
            {posts.map(post => (
              <Card post={post} changePostView={changePostView} user={user} />
            ))}
        </div>
    );
}

export default PostCard;
