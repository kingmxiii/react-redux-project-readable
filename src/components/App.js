import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import CategoriesList from './CategoriesList'


class App extends Component {
  componentDidMount() {
    this.props.fetchCategories()
    this.props.fetchComments()
    this.props.fetchPosts()

  }
  render() {
    const { categories } = this.props
    return (
      <div className="App">
        <CategoriesList categories={categories}/>
      </div>
    );
  }
}

function mapStateToProps({ posts, categories, comments }) {
  return{ posts, categories, comments }
}

export default connect(mapStateToProps, actions)(App);
