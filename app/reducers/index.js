import { combineReducers } from 'redux';
import { auth, signUp, editFileds, } from './authorization';

export default combineReducers({
    auth, signUp, editFileds,
});