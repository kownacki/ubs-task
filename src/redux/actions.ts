import { SET_CATEGORIES, SET_COORDINATORS, Category, Coordinator } from '../types';

export interface SetCategoriesAction {
  type: typeof SET_CATEGORIES,
  categories: Category[],
}

export const setCategories = (categories: Category[]):SetCategoriesAction => ({ type: SET_CATEGORIES, categories });

export interface SetCoordinatorsAction {
  type: typeof SET_COORDINATORS,
  coordinators: Coordinator[],
}

export const setCoordinators = (coordinators: Coordinator[]):SetCoordinatorsAction => ({ type: SET_COORDINATORS, coordinators });
