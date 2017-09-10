import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createPost, updatePost } from '../actions'

class PostForm extends Component {

  componentDidMount() {
    const { mode } = this.props.match.params
    this.initForm(mode)
  }

  initForm(mode){
    let formData;
    if(mode === 'edit'){
      const { title, body } = this.props.post
      formData = { title, body }
    }
    else {
      formData = { mode }
    }
    this.props.initialize(formData);
  }

  //Function to render fields dynamically
  //Code from redux-form documentation
  renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
    const className = `form-group ${ touched && error ? 'has-error' : ''}`

    return (
    <div className={ className }>
      <label>{label}</label>
      {(type === 'text') ?
        <input {...input} placeholder={label} type={type} className="form-control" />
      : <textarea {...input} placeholder={label} type={type} className="form-control" rows="5" ></textarea> }

      {touched && ((error && <span className="text-danger"><strong>{error}</strong></span>) || (warning && <span>{warning}</span>))}
    </div>
  )
}

renderSelect = ({ input, label, meta: { touched, error, warning } }) => {
  const { categories } = this.props
  const className = `form-group ${ touched && error ? 'has-error' : ''}`
  return (
    <div className={ className }>
      <label>{label}</label>
      <select {...input} className="form-control">
        <option value="">Select a category...</option>
        {categories.map(category =>
          <option value={category.name} key={category.name}>
            {category.name}
          </option>
        )}
      </select>
      {touched && ((error && <span className="text-danger"><strong>{error}</strong></span>) || (warning && <span>{warning}</span>))}
    </div>
  )
}

  onSubmit(values){
    const { mode, id } = this.props.match.params
    values.title = values.title.trim()
    values.body = values.body.trim()
    if(mode === 'new'){
      values.author = values.author.trim()
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
    const  { handleSubmit, pristine, submitting } = this.props
    const { mode } = this.props.match.params
    const formTitle = ( mode === 'new') ? 'New Post' : 'Edit Post'

    return (
      <div className="post-form-view">
          <h3>{formTitle}</h3>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="post-form" >


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
              <Field
                name="category"
                component={this.renderSelect}
                label="Category"
                >
              </Field>
          }

          <button type="submit" className="btn btn-primary" disabled={ pristine || submitting }>Save</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    )
  }
}

function validate(values){
  const errors = {};
  const { title, body, mode, author, category } = values

  if(!title || title.trim() === ''){
    errors.title = "Plesea enter a title!"
  }

  if(!body || body.trim() === ''){
    errors.body = "Post content cannot be empty!"
  }

  if( mode === 'new' && ( !author || author.trim() === '')){
    errors.author = "Please enter your Name!"
  }

  if( mode === 'new' && !category){
    errors.category = "Please choose a category!"
  }

  return errors
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
  form: 'PostForm',
  validate
}
)(
  connect(mapStateToProps, { createPost, updatePost })(PostForm)
);
