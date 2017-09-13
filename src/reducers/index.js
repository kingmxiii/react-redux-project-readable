import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import posts from './Posts'
import comments from './Comments'
import categories from './Categories'
import appSettings from './AppSettings'


export default combineReducers({posts, categories, comments, form, appSettings})
