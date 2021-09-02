import { combineReducers } from 'redux';

import posts from './posts';

export const reducers = combineReducers({ posts });
// posts : posts , we can write like this , but since both the key and value are the same , we can write only one