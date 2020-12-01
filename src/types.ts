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

export interface Output {
  title: string;
  description: string;
  category_id: number;
  paid_event: boolean;
  event_fee?: number;
  reward: number;
  date: string, // YYYY-MM-DDTHH:mm (example: 2018-01-19T15:15)
  duration: number; // in seconds
  coordinator: {
    email: string;
    id: string;
  },
}