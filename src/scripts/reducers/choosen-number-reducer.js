import { CHANGE_CHOOSEN_NUMBER, RESET_CHOOSEN_NUMBER } from '../constants';

export default (state = null, action) => {
  switch (action.type) {
    case CHANGE_CHOOSEN_NUMBER: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
