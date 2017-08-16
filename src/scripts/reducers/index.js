import { combineReducers } from 'redux';
import mainFieldReducer from './main-field/main-field-reducer';
import choosenAreaReducer from './choosen-area-reducer';
import choosenNumberReducer from './choosen-number-reducer';

export default combineReducers({
  mainField: mainFieldReducer,
  choosenArea: choosenAreaReducer,
  choosenNumber: choosenNumberReducer,
});
