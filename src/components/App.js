import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories()
    this.props.fetchComments()
    this.props.fetchPosts()

  }
  render() {
    return (
      <div className="App">
        Hello World!! {this.props.comments[1]}
      </div>
    );
  }
}

function mapStateToProps({ posts, categories, comments }) {
  return{ posts, categories, comments }
}

/*function mapDispatchToProps(dispatch) {
  return {
    fetchPosts,
    fetchCategories,
    fetchComments : (data) => dispatch(fetchComments)
  }
}
*/


export default connect(mapStateToProps, actions)(App);
