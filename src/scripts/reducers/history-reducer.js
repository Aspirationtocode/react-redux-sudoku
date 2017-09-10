import { initialState } from "./main-field/main-field-helpers";
import { ADD_TO_HISTORY, UNDO, REDO, GENERATE_NEW_FIELD } from "../constants";

const initialHistoryState = {
	past: [],
	present: initialState(),
	future: []
};

export default (state = initialHistoryState, action) => {
	const { past, present, future } = state;
	switch (action.type) {
		case ADD_TO_HISTORY: {
			return {
				past: [...past, present],
				present: action.payload,
				future: future
			};
		}
		case UNDO: {
			const prev = past[past.length - 1];
			const newPast = past.slice(0, past.length - 1);
			// console.log(prev, newPast);
			return {
				past: newPast,
				present: prev,
				future: [present, ...future]
			};
		}
		case REDO: {
			const next = future[0];
			const newFuture = future.slice(1);
			return {
				past: [...past, present],
				present: next,
				future: newFuture
			};
		}
		case GENERATE_NEW_FIELD: {
			return [];
		}
		default: {
			return state;
		}
	}
};
