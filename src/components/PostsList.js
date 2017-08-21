import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../actions'
import _ from 'lodash'
import Post from './Post'

class PostList extends Component {

  componentDidMount() {

  }

  render(){

    const { posts, comments, fetchComments } = this.props
    return(
      <div className="posts-list">
         { _.map(posts, post => {
           if (comments[post.id] === undefined){
              fetchComments(post.id)
           }
          const noComments = _.size(comments[post.id])

            return <Post key={post.id} post={post} comments={noComments}/>
        })}
      </div>
    )
  }
}

function mapStateToProps({comments}) {
  return{comments}
}

export default connect(mapStateToProps, {fetchComments})(PostList)
