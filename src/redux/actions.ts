import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { DOWNLOADED_DATA_FAILURE, DOWNLOADED_DATA_SUCCESS } from './actionTypes';
import { DataName, RootState } from '../types';
import { CATEGORIES_PATH, COORDINATORS_PATH } from '../constants';
import { fetchData } from '../utils';

export const handleDownloadedDataFailure = (dataName: DataName) => ({ type: DOWNLOADED_DATA_FAILURE, dataName });
export const handleDownloadedDataSuccess = <Data>(dataName: DataName, data: Data) => ({ type: DOWNLOADED_DATA_SUCCESS, dataName, data });

type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const downloadData = (dataName: DataName): AppThunk => {
  return async (dispatch) => {
    const pathToData = dataName === 'categories' ? CATEGORIES_PATH : COORDINATORS_PATH;
    const fetchResult = await fetchData(pathToData);
    if (fetchResult.isSuccess) {
      dispatch(handleDownloadedDataSuccess(dataName, fetchResult.data));
    } else {
      dispatch(handleDownloadedDataFailure(dataName));
    }
  }
};

