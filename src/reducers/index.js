import _ from 'lodash';
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import {
  FETCH_CATEGORIES,
  FETCH_COMMENTS,
  UPDATE_POST_SORT,
  SORT_COMMENTS,
  CREATE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  COMMENT_VOTE,
  OPEN_MODAL,
  CLOSE_MODAL
} from '../actions/types'
//Default app settings
export const initialSettings = {
  posts: { sortKey: "voteScore", sortOrder: "desc"},
  comments: { sortKey: "voteScore", sortOrder: "desc"},
  commentModal: {isOpen: false, mode:null, commentId:null, parentId:null}
}

export function appSettings(state = initialSettings, action){
  switch(action.type){
    case UPDATE_POST_SORT:
      return { ...state, 'posts': action.criteria }
    case SORT_COMMENTS:
        return { ...state, 'comments': action.criteria }
    case OPEN_MODAL:
        return { ...state, 'commentModal':action.payload }
    case CLOSE_MODAL:
        return { ...state, 'commentModal':action.payload }
    default:
      return state
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
     case CREATE_COMMENT:
       return { ...state,
                [action.payload.parentId]:{
                  ...state[action.payload.parentId],
                  [action.payload.id]:action.payload
                }}
     case UPDATE_COMMENT:
       return  { ...state,
                [action.payload.parentId]:{
                  ...state[action.payload.parentId],
                  [action.payload.id]:action.payload
                }}
     case COMMENT_VOTE:
        return  { ...state,
                  [action.payload.parentId]:{
                    ...state[action.payload.parentId],
                    [action.payload.id]:action.payload
                 }}
      case DELETE_COMMENT:
           const { id , parentId } = action.payload
           return { ...state, [parentId]: _.omit(state[parentId], id ) }
      default: return state;

  }

}

export default combineReducers({posts, categories, comments, form, appSettings})
