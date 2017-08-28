import _ from 'lodash';
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import {
  FETCH_POSTS,
  FETCH_POST,
  CREATE_POST,
  FETCH_CATEGORIES,
  FETCH_COMMENTS,
  POST_VOTE,
  UPDATE_POST,
  DELETE_POST
} from '../actions'

export function posts(state = {}, action){
  switch(action.type){
    case FETCH_POSTS:
     const activePosts = action.payload.filter((post) => {
       return !post.deleted
     }).sort(function(a,b){ return b.voteScore - a.voteScore})
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

export function categories(state = [], action){
  switch(action.type){
    case FETCH_CATEGORIES:
     return action.payload.categories

    default: return state;
  }

}

export function comments(state = {}, action){
  switch(action.type){
    case FETCH_COMMENTS:
     return {...state, [action.postId] : _.mapKeys(action.payload, 'id')}
    default: return state;
  }

}

export default combineReducers({posts, categories, comments, form})
