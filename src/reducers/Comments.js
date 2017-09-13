import _ from 'lodash';
import {
          FETCH_COMMENTS,
          UPDATE_COMMENT,
          COMMENT_VOTE,
          CREATE_COMMENT,
          DELETE_COMMENT
        } from '../actions/types'

export default function(state = {}, action){
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
