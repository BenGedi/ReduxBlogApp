import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
// import { bindActionCreators } from 'redux';

class PostsIndex extends Component {
    // componentWillMount called before the component is about to re-render for the first time
    componentWillMount() {
        // fetchPosts() is binded to props from bindActionCreators
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                List of blog posts
            </div>
        );
    }
}

/*function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPosts }, dispatch);
}
// i passed a null because i don't have a state to map it over to props
export default connect(null, mapDispatchToProps)(PostsIndex);*/

// i can use connet to bind fetchPosts to props instead use of mapDispatchToProps
export default connect(null, { fetchPosts })(PostsIndex);