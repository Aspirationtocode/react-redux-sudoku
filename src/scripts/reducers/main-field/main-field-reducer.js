import { initialState, fillMainFieldById, checkMainField } from './main-field-helpers';
import { FILL_AREA, GENERATE_NEW_FIELD, CONTINUE_PLAY } from '../../constants';

export default (state = initialState(), action) => {
  switch (action.type) {
    case FILL_AREA: {
      const { areaId, newValue } = action.payload;
      const newMainField = Object.assign({}, state, {
        data: fillMainFieldById(state.data, areaId, newValue),
      });
      if (!newMainField.data.filter(line => line.includes(0)).length) {
        return Object.assign({}, newMainField, { completed: checkMainField(newMainField.data) });
      }
      return newMainField;
    }
    case GENERATE_NEW_FIELD: {
      return initialState();
    }
    case CONTINUE_PLAY: {
      return Object.assign({}, state, { completed: null });
    }
    default: {
      return state;
    }
  }
};
