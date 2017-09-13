import _ from 'lodash';
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import {
  UPDATE_POST_SORT,
  OPEN_MODAL,
  CLOSE_MODAL
} from '../actions/types'
//Default app settings






export default combineReducers({posts, categories, comments, form, appSettings})
