import React, { Component } from 'react';

export default class CommentBox extends Component {
    render() {
        return (
            <div className="CommentBox">
                <textarea />
                <button>Submit comment</button>
            </div>
        );
    }
}
