import axios from 'axios'



const ROOT_URL = 'http://localhost:5001'
const  headers = { Authorization: 'reypolanco' }




//Get all categories from the server
export function fetchCategories(){
  const request = axios.get(`${ROOT_URL}/categories`, { headers })
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: FETCH_CATEGORIES, payload: data })
    })
  }
}
