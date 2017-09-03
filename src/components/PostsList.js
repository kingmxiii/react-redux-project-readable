import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchComments, deletePost } from '../actions'
import _ from 'lodash'
import Post from './Post'
import PostsBar from './PostsBar'

class PostList extends Component {

  componentDidMount() {

  }

  render(){

    const { posts, comments, fetchComments, deletePost, history } = this.props
    return(
      <div className="posts-list">
        <PostsBar/>
         { _.map(posts, post => {
           if (comments[post.id] === undefined){
              fetchComments(post.id)
           }
          const noComments = _.size(comments[post.id])

            return <Post key={post.id} post={post} comments={noComments} deletePost={deletePost}/>
        })}
      </div>
    )
  }
}

function mapStateToProps({ comments }) {
  return{comments}
}

export default connect(mapStateToProps, { fetchComments, deletePost })(PostList)
