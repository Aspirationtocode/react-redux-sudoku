import { CHANGE_CHOOSEN_AREA } from '../constants';

export default (state = null, action) => {
  switch (action.type) {
    case CHANGE_CHOOSEN_AREA: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
