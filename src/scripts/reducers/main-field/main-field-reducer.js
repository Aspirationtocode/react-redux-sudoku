import { initialField } from './main-field-helpers';
import { fillMainFieldById } from './main-field-helpers';
import { FILL_AREA } from '../../constants';

export default (state = initialField(), action) => {
  switch (action.type) {
    case FILL_AREA: {
      const { areaId, newValue } = action.payload;
      return fillMainFieldById(state, areaId, newValue);
    }
    default: {
      return state;
    }
  }
};
