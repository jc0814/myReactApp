import React from'react';
import faker from 'faker';

const CommentDeail = props => {
    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.pic}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                        {props.timeAgo}
                    </div>
                    <div className="text">
                        {props.comt}
                    </div>
                </div>
        </div>
    );
}

export default CommentDeail;