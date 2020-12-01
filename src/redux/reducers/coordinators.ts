import { SET_COORDINATORS, CoordinatorsState } from '../../types';
import { SetCoordinatorsAction } from '../actions';

export const initialState: CoordinatorsState = {
  status: false,
  list: [],
};

export const coordinators = (state = initialState, action: SetCoordinatorsAction): CoordinatorsState => {
  switch (action.type) {
    case SET_COORDINATORS:
      return {
        status: true,
        list: action.coordinators,
      };
    default:
      return state;
  }
};