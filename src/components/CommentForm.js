import React, { Component } from 'react'
import { Field, reduxForm, initialize } from 'redux-form'
import { connect } from 'react-redux'
import { createComment, updateComment, closeModal } from '../actions'

class CommentForm extends Component {

  componentDidMount() {
    const { mode } = this.props
    if(mode === 'edit'){
        this.initForm()
    }
  }

  initForm(){
    const { body } = this.props.comment
    const formData = { body }
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
    const { parentId, commentId, createComment, updateComment, closeModal, mode } = this.props
    if(mode === 'new'){
      values.id = Date.now().toString()
      values.timestamp = Date.now()
      values.parentId = parentId
      createComment(values, () => {
        closeModal()
      })
    }
    else{
      this.props.updateComment(commentId, values, () => {
        closeModal()
      })
    }
  }
  render(){
    const  { handleSubmit, closeModal, mode } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          { mode === 'new' &&
            <div>
              <Field
                name="author"
                label="Name"
                component={this.renderField}
                type="text"
              />
            </div>
          }
          <div>
            <Field
            name="body"
            label="Comment"
            component={this.renderField}
            type="textarea"
            />
          </div>

      <button type="submit" className="btn btn-primary">Save</button>
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
