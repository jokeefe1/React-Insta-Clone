import PropTypes from 'prop-types';
import React from 'react';
import Comment from '../Comment/Comment';
import Input from '../Input/Input';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            user: '',
            text: ''
        };
    }

    componentDidMount() {
        this.setState({ comments: this.state.comments });
    }

    addNewComment = (e, index) => {
        e.preventDefault();
        const comments = this.state.comments.slice();
        comments.push({
            username: localStorage.getItem('user'),
            text: this.state.text
        });
        this.setState({ comments, text: '' });
    };
    changeComment = e => {
        e.preventDefault();
        this.setState({ text: e.target.value });
    };

    render() {
        return (
            <div>
                {this.state.comments.map((comment, index) => {
                    return <Comment comment={comment} key={index} />;
                })}
                <span>17 HOURS AGO</span>
                <Input
                    add={this.addNewComment}
                    change={this.changeComment}
                    value={this.state.text}
                />
            </div>
        );
    }
}

CommentSection.propTypes = {
    comments: PropTypes.array.isRequired
};

export default CommentSection;
