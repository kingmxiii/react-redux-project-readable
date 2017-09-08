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
  renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )
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
    return (

      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div>
            <Field
            name="title"
            label="Title"
            component={this.renderField}
            type="text"
            />
          </div>
          <div>
            <Field
            name="body"
            label="Body"
            component={this.renderField}
            type="textarea"
            />
          </div>
          { (mode === "new") &&
          <div>
            <Field
            name="owner"
            label="Author"
            component={this.renderField}
            type="text"
            />
          </div>
        }
        { (mode === "new") &&
        <div>
          <Field name="category" component="select" label="Category">
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
  )
  }
}

function mapStateToProps({ posts, categories, formdata }, ownProps){
  const { id } = ownProps.match.params
  return{
    post: posts[id],
    categories,
    form: formdata
  }
}

export default reduxForm({
  form: 'PostForm'
}
)(
  connect(mapStateToProps, { createPost, updatePost })(PostForm)
);
