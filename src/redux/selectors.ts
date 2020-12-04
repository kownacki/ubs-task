import { useSelector } from 'react-redux';
import { RootState } from '../types';

const selectCategories = (state: RootState) => state.downloadedData.categories;
export const useCategories = () => useSelector(selectCategories);

const selectCoordinators = (state: RootState) => state.downloadedData.coordinators;
export const useCoordinators = () => useSelector(selectCoordinators);
