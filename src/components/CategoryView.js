import React from 'react'
import PostsList from './PostsList'
import _ from 'lodash'

export default function CategoryView(props) {

  const  { category, posts }  = props
  const catPosts = _.filter(posts, post => {
    return post.category === category
  })
  return (
    <div className="category-view">
      <h1>{category}</h1>
      <PostsList posts={catPosts}/>
    </div>
  )
}
