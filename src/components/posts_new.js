import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
    render() {
        return (
            <form>
                <h3>Create A New Post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text"className="form-control" />
                </div>
                <div className="form-group">
                    <label>Categories</label>
                    <input type="text"className="form-control" />
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        );
    }
}

// initial reduxForm
export default reduxForm(
    form: 'PostsNewFrom',
    fields: ['title','categories', 'content']
)(PostsNew);


// when user is typing something... redux-form record it on application state as follows:
/*state === {
    form: {
        PostsNewFrom: {
            title: '...',
            categories: '...',
            content: '...'
        }
    }
}*/
