import {
          UPDATE_POST_SORT,
          SORT_COMMENTS,
          OPEN_MODAL,
          CLOSE_MODAL
       } from '../actions/types'

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
