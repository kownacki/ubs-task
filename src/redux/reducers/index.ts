import { combineReducers } from 'redux';
import { categories } from './categories';
import { coordinators } from './coordinators';

export const reducers = combineReducers({ categories, coordinators });
