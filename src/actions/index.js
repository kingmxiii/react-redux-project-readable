import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const POST_VOTE = 'POST_VOTE'

const ROOT_URL = 'http://localhost:5001'
const  headers = { Authorization: 'reypolanco' }

export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts`, { headers })
  return (dispatch) => {
      request.then(({ data }) => {
        dispatch({ type: FETCH_POSTS, payload: data })
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
    data: { values }
  }
).then(() => callback())
/*  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: POST_VOTE, payload: data })
    })*/
  }

export function fetchComments(postId){
  const request = axios.get(`${ROOT_URL}/posts/${postId}/comments`, { headers })
  return (dispatch) => {
      request.then(({ data }) => {
        dispatch({ type: FETCH_COMMENTS, payload: data, postId })
      })
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
