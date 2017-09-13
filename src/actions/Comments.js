import axios from 'axios'
import * as util from '../util'

import {
  FETCH_COMMENTS,
  CREATE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  COMMENT_VOTE
} from './types'

const { headers, ROOT_URL } = util

// Get all comments from server
export function fetchComments(postId){
  const request = axios.get(`${ROOT_URL}/posts/${postId}/comments`, { headers })
  return (dispatch) => {
      request.then(({ data }) => {
        dispatch({ type: FETCH_COMMENTS, payload: data, postId })
      })
    }
}

//Create a comment
export function createComment(values, callback){
  const request = axios({
    url: `${ROOT_URL}/comments`,
    method : 'post',
    headers,
    data: values
  }
)
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: CREATE_COMMENT, payload: data })
      callback()
    })
  }
}

//Update a comment
export function updateComment(id,values, callback){
  const request = axios({
    url: `${ROOT_URL}/comments/${id}`,
    method : 'put',
    headers,
    data: values
  }
)
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: UPDATE_COMMENT, payload: data })
      callback()
    })
  }
}

//Delete a comment
export function deleteComment(id, parentId){
  const request = axios({
    url: `${ROOT_URL}/comments/${id}`,
    method : 'delete',
    headers
  }
)
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: DELETE_COMMENT, payload: { id, parentId } })
    })
  }
}

//Post a vote for a given Comment
export function commentVote(id, option){
  const request = axios({
    url: `${ROOT_URL}/comments/${id}`,
    method : 'post',
    headers,
    data: { option }
  }
    )
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: COMMENT_VOTE, payload: data })
    })
  }
}
