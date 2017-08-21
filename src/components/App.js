import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../actions';
import CategoriesList from './CategoriesList'
import PostList from './PostsList'


class App extends Component {
  componentDidMount() {
    this.props.fetchCategories()
    this.props.fetchPosts()
  }
  render() {
    const { categories, posts } = this.props
    return (
      <div className="App">
        <CategoriesList categories={categories}/>
        <Route exact parth="/" render={ () => (
          <PostList posts={posts}/>
        )}/>

      </div>
    );
  }
}

function mapStateToProps({ posts, categories, comments }) {
  return{ posts, categories }
}

export default connect(mapStateToProps, actions)(App);
