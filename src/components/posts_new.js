import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
    // to be able to get to the context we have to define it first.
    // contextTypes will search for a parent with the same defined propType (router)
    // in this case it will go up to the ROOT
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        debugger;
        this.props.createPost(props)
            .then(() => {
                // blog post has been created, navigate the user to the index
                // We navigate by calling this.context.router.push with the
                // new path to navigate to.
                this.context.router.push('/');
            });
    }

    render() {
        // this es6 syntax:
        const { fields: { title, categories, content }, handleSubmit } = this.props;
        // replacing this es5 syntax:
        // const title = this.props.fields.title;
        // ....

        return (
            <form onSubmit={ handleSubmit( this.onSubmit.bind(this) ) }>
                <h3>Create A New Post</h3>

                <div className={ `form-group ${ title.touched && title.invalid ? 'has-danger' : '' }` } >
                    <label>Title</label>
                    <input type="text"className="form-control" { ...title } />
                    <div className="text-help">
                        { title.touched ? title.error : '' }
                    </div>
                </div>
                <div className ={ `form-group ${categories.touched && categories.invalid ? 'has-danger' : '' }` } >
                    <label>Categories</label>
                    <input type="text"className="form-control" { ...categories } />
                    <div className="text-help">
                        { categories.touched ? categories.error : '' }
                    </div>
                </div>
                <div className={ `form-group ${content.touched && content.invalid ? 'has-danger' : '' }` } >
                    <label>Content</label>
                    <textarea className="form-control" { ...content } />
                    <div className="text-help">
                        { content.touched ? content.error : '' }
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

// before submit, redux form is passing the config props to 'validate' method,
// if they are not validate the return value is not be empty and a validation will be display
function validate(values) {
    const errors = {};

    if(!values.title) {
        errors.title = 'Enter a username';
    }
    if(!values.categories) {
        errors.categories = 'Enter categories';
    }
    if(!values.content) {
        errors.content = 'Enter some content';
    }

    return errors;
}

// initial reduxForm
// redux form has the exact same behavior as connect,
// it can be use to inject actionsCreator into the component

// the difference between redux-form and connect is:
// connect: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
    form: 'PostsNewFrom',
    fields: ['title','categories', 'content'],
    validate
}, null, { createPost })(PostsNew);


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
