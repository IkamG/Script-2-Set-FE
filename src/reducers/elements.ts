import {
	ADD_CAST,
	ADD_SET,
	ADD_STORYBOARD,
	ADD_VEHICLE,
	ADD_WARDROBE,
	DELETE_ELEMENT,
	EDIT_ELEMENT,
} from "../constants/ActionTypes";
const initalState = [
	{
		text: "",
		elementType: "",
		id: 0,
		sceneNum: "0",
	},
];

export default function elements(state = initalState, action: any) {
	switch (action.type) {
		case ADD_CAST:
			return [
				...state,
				{
					id:
						state.reduce((maxId, element) => Math.max((element.id === undefined) ? 0 : element.id, maxId), -1) +
						1,
					elementType: "cast",
					text: action.text,
					sceneNum: action.sceneNum,
				},
			];
		case ADD_SET:
			return [
				...state,
				{
					id:
						state.reduce((maxId, element) => Math.max((element.id === undefined) ? 0 : element.id, maxId), -1) +
						1,
					elementType: "set",
					text: action.text,
					sceneNum: action.sceneNum,
				},
			];
		case ADD_STORYBOARD:
			return [
				...state,
				{
					id:
						state.reduce((maxId, element) => Math.max((element.id === undefined) ? 0 : element.id, maxId), -1) +
						1,
					elementType: "storyboard",
					text: action.text,
					sceneNum: action.sceneNum,
				},
			];
		case ADD_VEHICLE:
			return [
				...state,
				{
					id:
						state.reduce((maxId, element) => Math.max((element.id === undefined) ? 0 : element.id, maxId), -1) +
						1,
					elementType: "vehicle",
					text: action.text,
					sceneNum: action.sceneNum,
				},
			];
		case ADD_WARDROBE:
			return [
				...state,
				{
					id:
						state.reduce((maxId, element) => Math.max((element.id === undefined) ? 0 : element.id, maxId), -1) +
						1,
					elementType: "wardrobe",
					text: action.text,
					sceneNum: action.sceneNum,
				},
			];
		case DELETE_ELEMENT:
			return state.filter((element) => element.id !== action.id);
		case EDIT_ELEMENT:
			return state.map((element) =>
				element.id === action.id ? { ...element, text: action.text } : element
			);
		default:
			return state;
	}
}
