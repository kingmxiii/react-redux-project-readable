import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../actions';
import CategoriesList from './CategoriesList'
import PostList from './PostsList'
import CategoryView from './CategoryView'
import PostDetails from './PostDetails'
import PostForm from './PostForm'


class App extends Component {
  componentDidMount() {
    this.props.fetchCategories()
    this.props.fetchPosts()
  }
  render() {
    const { categories, posts } = this.props
    return (
      <BrowserRouter>
      <div className="App container">
        <CategoriesList categories={categories}/>
        <Link to="/post/action/new">New Post</Link>
        <Link to="/post/action/edit/8xf0y6ziyjabvozdd253nd">New Post</Link>

        <div className="app-content">
        <Route exact path="/" component={PostList}/>

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
