import _ from 'lodash';
import { combineReducers } from 'redux'
import {
  FETCH_POSTS,
  FETCH_CATEGORIES,
  FETCH_COMMENTS
} from '../actions'

export function posts(state = {}, action){
  switch(action.type){
    case FETCH_POSTS:
     return _.mapKeys(action.payload,'id')
    default: return state;
  }

}

export function categories(state = [], action){
  console.log(action)
  switch(action.type){
    case FETCH_CATEGORIES:
     return action.payload.categories

    default: return state;
  }

}

export function comments(state = {}, action){
  switch(action.type){
    case FETCH_COMMENTS:
     return action.payload

    default: return state;
  }

}

export default combineReducers({posts, categories, comments})
