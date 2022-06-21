import * as types from '../constants/ActionTypes'

export const addLocation = (text: any) => ({ type: types.ADD_LOCATION, text })
export const addVehicle = (text: any) => ({ type: types.ADD_VEHICLE, text })
export const addWardrobe = (text: any) => ({ type: types.ADD_WARDROBE, text })
export const addCast = (text: any) => ({ type: types.ADD_CAST, text })
export const addStoryboard = (text: any) => ({ type: types.ADD_STORYBOARD, text })
export const editElement = (id: any, text: any) => ({ type: types.EDIT_ELEMENT, id , text})
export const deleteElement = (id: any) => ({ type: types.DELETE_ELEMENT, id })
export const shopElement = (id: any, text: any) => ({ type: types.SHOP_ELEMENT, id , text})
export const setVisibilityFilter = (filter: any) => ({ type: types.SET_VISIBILITY_FILTER, filter})