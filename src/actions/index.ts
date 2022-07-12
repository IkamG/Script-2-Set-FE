//TODO: add missing element types
import * as types from '../constants/ActionTypes'

export const addSet = (text: any, sceneNum: any) => ({ type: types.ADD_SET, text,sceneNum})
export const addVehicle = (text: any) => ({ type: types.ADD_VEHICLE, text })
export const addWardrobe = (text: any) => ({ type: types.ADD_WARDROBE, text })
export const addCast = (text: any, sceneNum: any) => ({ type: types.ADD_CAST, text,sceneNum })
export const addStoryboard = (text: any) => ({ type: types.ADD_STORYBOARD, text })
export const editElement = (id: any, text: any) => ({ type: types.EDIT_ELEMENT, id , text})
export const deleteElement = (id: any) => ({ type: types.DELETE_ELEMENT, id })
export const shopElement = (id: any, text: any) => ({ type: types.SHOP_ELEMENT, id , text})
export const setVisibilityFilter = (filter: any) => ({ type: types.SET_VISIBILITY_FILTER, filter})