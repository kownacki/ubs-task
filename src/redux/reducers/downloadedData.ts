import { createReducer } from '@reduxjs/toolkit';
import { DownloadedDataState, DownloadStatus, Data, DataName } from '../../types';
import { DOWNLOADED_DATA_FAILURE, DOWNLOADED_DATA_SUCCESS } from '../actionTypes';

export const initialState: DownloadedDataState = {
  categories: {
    status: DownloadStatus.Loading,
    data: [],
  },
  coordinators: {
    status: DownloadStatus.Loading,
    data: [],
  },
};

export const downloadedData = createReducer(
  initialState,
  {
    [DOWNLOADED_DATA_FAILURE]: (
        state: DownloadedDataState,
        resp: {
          dataName: DataName,
        }
    ) => ({
      ...state,
      [resp.dataName]: {
        status: DownloadStatus.Success,
      }
    }),
    [DOWNLOADED_DATA_SUCCESS]: (
        state: DownloadedDataState,
        resp: {
          dataName: DataName,
          data: Data,
        }
    ) => ({
      ...state,
      [resp.dataName]: {
        status: DownloadStatus.Success,
        data: resp.data,
      }
    }),
  },
);
