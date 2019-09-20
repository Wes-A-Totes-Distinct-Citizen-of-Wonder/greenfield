import React from 'react';
import PropTypes from 'prop-types';
import SearchTag from '../SearchTag.jsx';
import Card from './Card.jsx';

const PostCard = (props) => {
    const { posts, changePostView } = props;

    return (
        <div>
        <SearchTag searchByTag={props.searchByTag} searchByZip={props.searchByZip} />
        <hr />
            {posts.map(post => (
              <Card post={post} changePostView={changePostView} />
            ))}
        </div>
    );
}

export default PostCard;
