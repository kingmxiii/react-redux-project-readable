import axios from 'axios'

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const FETCH_CATEGORIES = 'fetch_categories'
export const FETCH_COMMENTS = 'fetch_comments'

const ROOT_URL = 'http://localhost:5001'
const  header = { Authorization: 'reypolanco' }

export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts`, { header })
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function fetchComments(){
  return {
    type: FETCH_COMMENTS,
    payload: {}
  }
}

export function fetchCategories(){
  const request = axios.get(`${ROOT_URL}/posts`, { header })
  return {
    type: FETCH_CATEGORIES,
    payload: request
  }
}
