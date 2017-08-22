import { initialState } from '../../reducers/main-field/main-field-helpers';

export const isInInitialState = (areaId) => {
  const [index1, index2] = areaId.split('/');
  return initialState().data[index1][index2] !== 0;
};
