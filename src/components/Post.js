import React, {Component} from "react";
import {connect} from "react-redux";
import {requestFetchPost} from "../core/actions";

@connect(
    ({post}) => ({
        post
    }),
    (dispatch) => ({
        loadPost: id => dispatch(requestFetchPost(id))
    })
)
class Post extends Component {
    componentWillMount() {
        this.props.loadPost();
    }

    render() {
        return (
            <div>{this.props.post.content}</div>
        );
    }
}

export default Post