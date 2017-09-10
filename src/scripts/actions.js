import {
	CHANGE_CHOOSEN_AREA,
	CHANGE_CHOOSEN_NUMBER,
	FILL_AREA,
	GENERATE_NEW_FIELD,
	CONTINUE_PLAY,
	ADD_TO_HISTORY,
	UNDO,
	REDO,
	LOAD_FROM_HISTORY
} from "./constants";

export const changeChoosenArea = areaId => ({
	type: CHANGE_CHOOSEN_AREA,
	payload: areaId
});
export const changeChoosenNumber = number => ({
	type: CHANGE_CHOOSEN_NUMBER,
	payload: number
});
export const fillArea = (areaId, newValue) => ({
	type: FILL_AREA,
	payload: { areaId, newValue }
});
export const addToHistory = mainField => ({
	type: ADD_TO_HISTORY,
	payload: mainField
});
export const undo = () => ({
	type: UNDO
});
export const redo = () => ({
	type: REDO
});
export const loadFromHistory = newMainField => {
	// console.log(newMainField);
	return {
		type: LOAD_FROM_HISTORY,
		payload: newMainField
	};
};
export const generateNewField = () => ({
	type: GENERATE_NEW_FIELD
});
export const continuePlay = () => ({
	type: CONTINUE_PLAY
});
