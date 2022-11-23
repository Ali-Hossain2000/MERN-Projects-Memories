import { combineReducers } from 'redux';

import auth from './auth';
import posts from './posts.js';

export default combineReducers({ posts, auth });
