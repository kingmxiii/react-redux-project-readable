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
export const OPEN_MODAL = 'OPEN_MODAL'

const ROOT_URL = 'http://localhost:5001'
const  headers = { Authorization: 'reypolanco' }

export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts`, { headers })
  return (dispatch, getState) => {
      request.then(({ data }) => {
        const settings = getState().appSettings.posts
        dispatch({ type: FETCH_POSTS, payload: data, settings })
      })
    }
}

export function fetchPost(postId){
  const request = axios.get(`${ROOT_URL}/posts/${postId}`, { headers })
  return (dispatch) => {
      request.then(({ data }) => {
        dispatch({ type: FETCH_POST, payload: data, postId })
      })
    }
}

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

export function sortPost(criteria){
  return {
    type: UPDATE_POST_SORT,
    criteria
  }
}

export function fetchComments(postId){
  const request = axios.get(`${ROOT_URL}/posts/${postId}/comments`, { headers })
  return (dispatch) => {
      request.then(({ data }) => {
        dispatch({ type: FETCH_COMMENTS, payload: data, postId })
      })
    }
}

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

export function sortComments(criteria){
  return {
    type: SORT_COMMENTS,
    criteria
  }
}


export function fetchCategories(){
  const request = axios.get(`${ROOT_URL}/categories`, { headers })
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: FETCH_CATEGORIES, payload: data })
    })
  }
}

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

export function openModal(mode,commentId,parentId){
  return {
    type: OPEN_MODAL,
    payload: {
      isOpen = true,
      mode,
      commentId,
      parentId
    }
  }
}
