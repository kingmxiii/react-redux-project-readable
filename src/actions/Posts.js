import axios from 'axios'
import * from '../utils'

import {
  FETCH_POSTS,
  FETCH_POST,
  CREATE_POST,
  POST_VOTE,
  UPDATE_POST,
  DELETE_POST,
  UPDATE_POST_SORT
} from './types'

//Get all the post fro the server
export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts`, { headers })
  return (dispatch, getState) => {
      request.then(({ data }) => {
        const settings = getState().appSettings.posts
        dispatch({ type: FETCH_POSTS, payload: data, settings })
      })
    }
}

//Get a specific post
export function fetchPost(postId){
  const request = axios.get(`${ROOT_URL}/posts/${postId}`, { headers })
  return (dispatch) => {
      request.then(({ data }) => {
        dispatch({ type: FETCH_POST, payload: data, postId })
      })
    }
}

//Add a new post
export function createPost(values, callback){
  const request = axios({
    url: `${ROOT_URL}/posts`,
    method : 'post',
    headers,
    data: values
  }
)
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: CREATE_POST, payload: data })
      callback()
    })
  }
}

//Update a post
export function updatePost(id,values, callback){
  const request = axios({
    url: `${ROOT_URL}/posts/${id}`,
    method : 'put',
    headers,
    data: values
  }
)
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: UPDATE_POST, payload: data })
      callback()
    })
  }
}

//Delete a post
export function deletePost(id){
  const request = axios({
    url: `${ROOT_URL}/posts/${id}`,
    method : 'delete',
    headers
  }
)
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: DELETE_POST, payload: id })
    })
  }
}


//Post a vote for a given Post
export function postVote(postId, option){
  const request = axios({
    url: `${ROOT_URL}/posts/${postId}`,
    method : 'post',
    headers,
    data: { option }
  }
    )
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: POST_VOTE, payload: data })
    })
  }
}
