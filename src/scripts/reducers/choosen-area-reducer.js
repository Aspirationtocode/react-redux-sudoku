import { CHANGE_CHOOSEN_AREA, GENERATE_NEW_FIELD } from '../constants';

const initialState = '4/4';

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CHOOSEN_AREA: {
      return action.payload;
    }
    case GENERATE_NEW_FIELD: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
