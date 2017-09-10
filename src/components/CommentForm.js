import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createComment, updateComment, closeModal } from '../actions'

class CommentForm extends Component {

  componentDidMount() {
    const { mode } = this.props
    this.initForm(mode)
  }

  initForm(mode){
    let formData
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

  onSubmit(values){
    const { parentId, commentId, createComment, updateComment, closeModal, mode } = this.props
    values.body = values.body.trim()
    if(mode === 'new'){
      values.owner = values.author.trim()
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
  form: 'CommentForm'
}
)(
  connect(mapStateToProps, { createComment, updateComment, closeModal })(CommentForm)
);
