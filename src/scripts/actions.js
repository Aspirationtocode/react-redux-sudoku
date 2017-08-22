import {
  CHANGE_CHOOSEN_AREA,
  CHANGE_CHOOSEN_NUMBER,
  FILL_AREA,
  GENERATE_NEW_FIELD,
  CONTINUE_PLAY,
} from './constants';

export const changeChoosenArea = areaId => ({ type: CHANGE_CHOOSEN_AREA, payload: areaId });
export const changeChoosenNumber = number => ({ type: CHANGE_CHOOSEN_NUMBER, payload: number });
export const fillArea = (areaId, newValue) => ({ type: FILL_AREA, payload: { areaId, newValue } });
export const generateNewField = () => ({
  type: GENERATE_NEW_FIELD,
});
export const continuePlay = () => ({
  type: CONTINUE_PLAY,
});
