import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../actions';
import AppMenu from './AppMenu'
import PostList from './PostsList'
import CategoryView from './CategoryView'
import PostDetails from './PostDetails'
import PostForm from './PostForm'
import '../App.css'


class App extends Component {
  componentDidMount() {
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

function mapStateToProps({ posts, categories, comments }) {
  return{ posts, categories }
}

export default connect(mapStateToProps, actions)(App);
