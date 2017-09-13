import { FETCH_CATEGORIES } from '../actions/types'

export function categories(state = [], action){
  switch(action.type){
    case FETCH_CATEGORIES:
     return action.payload.categories

    default: return state;
  }

}
