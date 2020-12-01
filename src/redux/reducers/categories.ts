import { SET_CATEGORIES, CategoriesState } from '../../types';
import { SetCategoriesAction } from '../actions';

export const initialState: CategoriesState = {
  status: false,
  list: [],
};

export const categories = (state = initialState, action: SetCategoriesAction): CategoriesState => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        status: true,
        list: action.categories,
      };
    default:
      return state;
  }
};