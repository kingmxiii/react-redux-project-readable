import _ from 'lodash';
import {
          FETCH_POSTS,
          FETCH_POST,
          CREATE_POST,
          UPDATE_POST,
          DELETE_POST,
          POST_VOTE
        } from '../actions/types'

export default function(state = {}, action){
  switch(action.type){
    case FETCH_POSTS:
     const activePosts = action.payload.filter((post) => {
       return !post.deleted
     })
     return _.mapKeys(activePosts,'id')
    case FETCH_POST:
      return { ...state, [action.postId]: action.payload }
    case POST_VOTE:
      return { ...state, [action.payload.id]: action.payload }
    case CREATE_POST:
      return { ...state, [action.payload.id]: action.payload }
    case UPDATE_POST:
      return { ...state, [action.payload.id]: action.payload }
    case DELETE_POST:
      return _.omit(state, action.payload)
    default: return state;
  }
}
