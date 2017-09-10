import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createComment, updateComment, closeModal } from '../actions'

//form to create or edit a comment
class CommentForm extends Component {

  componentDidMount() {
    //Initialize form when form is loaded
    const { mode } = this.props
    this.initForm(mode)
  }

  //Method that initialize the form
  initForm(mode){
    let formData
    //Load comment data when form is on edit mode
    if(mode === 'edit') {
      const { body } = this.props.comment
      formData = { body, mode }
    }
    else {
      formData = { mode }
    }

    this.props.initialize(formData);
  }

  //Function to render fields dynamically
  renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
    const className = `form-group ${ touched && error ? 'has-error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        {(type === 'text') ?
          <input {...input} placeholder={label} type={type} className="form-control" />
          : <textarea {...input} placeholder={label} type={type} className="form-control" rows="5" ></textarea> }
          {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
  )}
  //Function to handle form submit
  onSubmit(values){
    const { parentId, commentId, createComment, updateComment, closeModal, mode } = this.props
    //Remove extra white space from body
    values.body = values.body.trim()
    //If is a new comment set id, timeStamp and parentId
    if(mode === 'new'){
      values.author = values.author.trim()
      values.id = Date.now().toString()
      values.timestamp = Date.now()
      values.parentId = parentId
      createComment(values, () => {
        closeModal()
      })
    }
    else{
        updateComment(commentId, values, () => {
        closeModal()
      })
    }
  }
  render(){
    const  { handleSubmit, closeModal, mode, pristine, submitting } = this.props
    //Set the title of the form
    const formTitle = ( mode === 'new') ? 'New Comment' : 'Edit Comment'
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <h4>{formTitle}</h4>
          { mode === 'new' &&

              <Field
                name="author"
                label="Name"
                component={this.renderField}
                type="text"
              />

          }

            <Field
            name="body"
            label="Comment"
            component={this.renderField}
            type="textarea"
            />


      <button type="submit" className="btn btn-primary" disabled={ pristine || submitting }>Save</button>
      <button className="btn btn-danger" onClick={()=>{ closeModal()}}>Cancel</button>
      </form>
  )
  }
}

//Function that validates form inputs 
function validate(values){
  const errors = {};
  const { author, body, mode } = values

  if(!body || body.trim() === ''){
    errors.body = "Comment content cannot be empty!"
  }

  if( mode === 'new' && ( !author || author.trim() === '')){
    errors.author = "Please enter your Name!"
  }

  return errors
}

function mapStateToProps({ comments, form, appSettings }){
  const { commentId, parentId, mode } = appSettings.commentModal
  return{
    comment: comments[parentId][commentId],
    form,
    commentId,
    parentId,
    mode
  }
}

export default reduxForm({
  form: 'CommentForm',
  validate
}
)(
  connect(mapStateToProps, { createComment, updateComment, closeModal })(CommentForm)
);
