import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createPost, updatePost } from '../actions'

class PostForm extends Component {

  componentDidMount() {
    const { mode } = this.props.match.params
    if(mode === 'edit'){
        this.initForm()
    }
  }

  initForm(){
    const { title, body } = this.props.post
    const formData = { title, body }
    this.props.initialize(formData);
  }

  //Function to render fields dynamically
  //Code from redux-form documentation
  renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
    const className = `form-group ${ touched & error ? 'has-danger' : ''}`

    return (
    <div className={ className }>
      <label>{label}</label>
      {(type === 'text') ?
        <input {...input} placeholder={label} type={type} className="form-control" required />
      : <textarea {...input} placeholder={label} type={type} className="form-control" rows="5" required ></textarea> }

      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  )
}

  onSubmit(values){
    const { mode, id } = this.props.match.params
    if(mode === 'new'){
      values.id = Date.now().toString()
      values.timestamp = Date.now()
      this.props.createPost(values, () => {
        this.props.history.push('/')
      })
    }
    else{
      this.props.updatePost(id, values, () => {
        this.props.history.push('/')
      })
    }
  }
  render(){
    const  { categories, handleSubmit } = this.props
    const { mode } = this.props.match.params
    const formTitle = ( mode === 'new') ? 'New Post' : 'Edit Post'
    return (
      <div className="post-form-view">
          <h3>{formTitle}</h3>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="post-form">

            <Field
            name="title"
            label="Title"
            component={this.renderField}
            type="text"
            />

            <Field
            name="body"
            label="Body"
            component={this.renderField}
            type="textarea"
            rows="5"
            />

          { (mode === "new") &&
            <Field
            name="author"
            label="Author"
            component={this.renderField}
            type="text"
            />
          }

          { (mode === "new") &&
            <div className="form-group">
              <label>Category</label>
              <Field name="category" component="select" label="Category" className="form-control">
                <option value="">Select a category...</option>
                {categories.map(category =>
                  <option value={category.name} key={category.name}>
                    {category.name}
                  </option>
                )}
              </Field>
            </div>
          }

          <button type="submit" className="btn btn-primary">Save</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ posts, categories, form }, ownProps){
  const { id } = ownProps.match.params
  return{
    post: posts[id],
    categories,
    form
  }
}

export default reduxForm({
  form: 'PostForm'
}
)(
  connect(mapStateToProps, { createPost, updatePost })(PostForm)
);
