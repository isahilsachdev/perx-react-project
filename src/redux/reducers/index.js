import { combineReducers } from 'redux';
import userInfoReducer from './userInfoReducer';
import reposReducer from './reposReducer';
import orgsReducer from './orgsReducer';

const rootReducer = combineReducers({
  userInfo: userInfoReducer,
  repos: reposReducer,
  orgs: orgsReducer,
});

export default rootReducer;