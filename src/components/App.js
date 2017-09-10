import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
import AppMenu from './AppMenu'
import PostList from './PostsList'
import CategoryView from './CategoryView'
import PostDetails from './PostDetails'
import PostForm from './PostForm'
import '../App.css'
import _ from 'lodash'


class App extends Component {
  componentDidMount() {
    //Load categories and posts when app first load
    this.props.fetchCategories()
    this.props.fetchPosts()
  }
  render() {
    const { categories, posts } = this.props
    return (
      <BrowserRouter>
      <div className="App">
        <div className="app-navbar">
          <AppMenu cats={categories} />
        </div>
        <div className="app-content container">
        <Route exact path="/" render={ (history) => {
          return(
            <PostList posts={posts} />
          )
        }}/>
        <Route exact path="/post/action/:mode" component={PostForm}/>
        <Route exact path="/post/action/:mode/:id" component={PostForm}/>
        <Route exact path="/:category/:post_id" component={PostDetails}/>

        <Route exact path="/:category" render={ ( history ) =>{
          return (
            <CategoryView posts={posts} category={history.match.params.category}/>
         )}}/>
      </div>
      </div>
    </BrowserRouter>
    );
  }
}

function mapStateToProps({ posts, categories, comments, appSettings }) {
  return{
    //Get the post from store and sort them by appSettings
    posts: _.mapKeys(_.orderBy(posts, appSettings.posts.sortKey, appSettings.posts.sortOrder), 'id'),
    categories,
    appSettings
   }
}

export default connect(mapStateToProps, actions)(App);
