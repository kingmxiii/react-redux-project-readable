import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POST = 'FETCH_POST'
export const CREATE_POST = 'CREATE_POST'
export const UPDATE_POST_SORT = 'UPDATE_POST_SORT'
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const POST_VOTE = 'POST_VOTE'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const SORT_COMMENTS = 'SORT_COMMENTS'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const COMMENT_VOTE = 'COMMENT_VOTE'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

const ROOT_URL = 'http://localhost:5001'
const  headers = { Authorization: 'reypolanco' }

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

// Sort posts by given criteria
export function sortPost(criteria){
  return {
    type: UPDATE_POST_SORT,
    criteria
  }
}

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

//Sort comments by given criteria
export function sortComments(criteria){
  return {
    type: SORT_COMMENTS,
    criteria
  }
}

//Get all categories from the server
export function fetchCategories(){
  const request = axios.get(`${ROOT_URL}/categories`, { headers })
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: FETCH_CATEGORIES, payload: data })
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

//Open  comment modal
export function openModal(mode,commentId,parentId){
  return {
    type: OPEN_MODAL,
    payload: {
      isOpen: true,
      mode,
      commentId,
      parentId
    }
  }
}

//Close Commen Modal
export function closeModal(){
  return {
    type: CLOSE_MODAL,
    payload: {
      isOpen: false,
      mode: null,
      commentId: null,
      parentId: null
    }
  }
}
