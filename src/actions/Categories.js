import { FETCH_CATEGORIES } from './types'
import axios from 'axios'
import * as util from '../util'

const { headers, ROOT_URL } = util
//Get all categories from the server
export function fetchCategories(){
  const request = axios.get(`${ROOT_URL}/categories`, { headers })
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: FETCH_CATEGORIES, payload: data })
    })
  }
}
