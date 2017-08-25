import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createPost } from '../actions'

class PostForm extends Component {
  //Function to render fields dynamically 
  //Code from redux-form documentation
  const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )
  onSubmit(values){
    values.id = "1234567890"
    values.timestamp = Date.now()
    this.props.createPost(values, () => {
      this.props.history.push('/')
    })
  }
  render(){
    const  { categories, handleSubmit } = this.props
    return (

      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
          <label>Title</label>
          <div>
            <Field
            name="title"
            component="input"
            type="text"
            placeholder="Post Title"
            />
          </div>
        </div>
        <div>
          <label>Body</label>
          <div>
            <Field
            name="body"
            component="input"
            type="textarea"
            placeholder="Post Body"
            />
          </div>
        </div>
        <div>
          <label>Author</label>
          <div>
            <Field
            name="owner"
            component="input"
            type="text"
            placeholder="Post Author"
            />
          </div>
        </div>
        <div>
        <label>Category</label>
        <div>
          <Field name="category" component="select">
            <option value="">Select a category...</option>
            {categories.map(category =>
              <option value={category.name} key={category.name}>
                {category.name}
              </option>
            )}
          </Field>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Save</button>
      <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
  )
  }
}

function mapStateToProps({ categories }){
  return {
    categories
  }
}

export default reduxForm({
  form: 'PostForm'
}
)(
  connect(mapStateToProps, { createPost })(PostForm)
);
