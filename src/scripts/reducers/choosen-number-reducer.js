import { CHANGE_CHOOSEN_NUMBER, GENERATE_NEW_FIELD, RESET_CHOOSEN_NUMBER } from '../constants';

export default (state = null, action) => {
  switch (action.type) {
    case CHANGE_CHOOSEN_NUMBER: {
      return action.payload;
    }
    case GENERATE_NEW_FIELD: {
      return null;
    }
    default: {
      return state;
    }
  }
};
