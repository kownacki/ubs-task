export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_COORDINATORS = 'SET_COORDINATORS';

export interface Category {
  id: number;
  name: string;
}
export interface CategoriesState {
  status: boolean;
  list: Category[];
}

export interface Coordinator {
  id: number;
  name: string;
  lastname: string;
  email: string;
}

export interface CoordinatorsState {
  status: boolean;
  list: Coordinator[];
}

export interface RootState {
  categories: CategoriesState;
  coordinators: CoordinatorsState;
}
