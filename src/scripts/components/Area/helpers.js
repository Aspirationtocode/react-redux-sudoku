import { initialField } from '../../reducers/main-field/main-field-helpers';

export const isInInitialState = (areaId) => {
  const [index1, index2] = areaId.split('/');
  return initialField()[index1][index2] !== 0;
};
