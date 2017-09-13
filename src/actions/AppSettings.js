import {
  UPDATE_POST_SORT,
  SORT_COMMENTS,
  OPEN_MODAL,
  CLOSE_MODAL
} from './types'

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

//Sort comments by given criteria
export function sortComments(criteria){
  return {
    type: SORT_COMMENTS,
    criteria
  }
}

// Sort posts by given criteria
export function sortPost(criteria){
  return {
    type: UPDATE_POST_SORT,
    criteria
  }
}
