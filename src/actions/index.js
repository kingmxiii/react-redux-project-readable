import axios from 'axios'



const ROOT_URL = 'http://localhost:5001'
const  headers = { Authorization: 'reypolanco' }



// Get all comments from server
export function fetchComments(postId){
  const request = axios.get(`${ROOT_URL}/posts/${postId}/comments`, { headers })
  return (dispatch) => {
      request.then(({ data }) => {
        dispatch({ type: FETCH_COMMENTS, payload: data, postId })
      })
    }
}

//Create a comment
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

//Update a comment
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

//Delete a comment
export function deleteComment(id, parentId){
  const request = axios({
    url: `${ROOT_URL}/comments/${id}`,
    method : 'delete',
    headers
  }
)
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: DELETE_COMMENT, payload: { id, parentId } })
    })
  }
}

//Sort comments by given criteria
export function sortComments(criteria){
  return {
    type: SORT_COMMENTS,
    criteria
  }
}

//Get all categories from the server
export function fetchCategories(){
  const request = axios.get(`${ROOT_URL}/categories`, { headers })
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: FETCH_CATEGORIES, payload: data })
    })
  }
}



//Post a vote for a given Comment
export function commentVote(id, option){
  const request = axios({
    url: `${ROOT_URL}/comments/${id}`,
    method : 'post',
    headers,
    data: { option }
  }
    )
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: COMMENT_VOTE, payload: data })
    })
  }
}

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
