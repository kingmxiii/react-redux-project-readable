import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../actions';
import CategoriesList from './CategoriesList'
import PostList from './PostsList'
import CategoryView from './CategoryView'
import PostDetails from './PostDetails'


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
        <CategoriesList categories={categories}/>


        <div className="app-content">
        <Route exact path="/" render={ () => (
          <PostList posts={posts}/>
        )}/>

        <Route path="/:category/:post_id" component={PostDetails}/>

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
