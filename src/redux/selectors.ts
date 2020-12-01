import { useSelector } from 'react-redux';
import { RootState } from '../types';

const selectCategories = (state: RootState) => state.categories;
export const useCategories = () => useSelector(selectCategories);

const selectCoordinators = (state: RootState) => state.coordinators;
export const useCoordinators = () => useSelector(selectCoordinators);
