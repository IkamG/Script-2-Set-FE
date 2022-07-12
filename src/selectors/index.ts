//TODO: add missing element types
import { createSelector } from "@reduxjs/toolkit";
import * as elFilter from "../constants/ElementFilters";
const getVisibilityFilter = (state: { visibilityFilter: any }) =>
	state.visibilityFilter;
const getElements = (state: { elements: any }) => state.elements;

export const getVisibleElements = createSelector(
	[getVisibilityFilter, getElements],
	(visibilityFilter, elements) => {
		switch (visibilityFilter) {
			case elFilter.SHOW_ALL:
				return elements.filter((t: { elementType: any }) => t.elementType !== "storyboard");
			case elFilter.SHOW_SET:
				return elements.filter((t: { elementType: any }) => t.elementType === "set");
			case elFilter.SHOW_VEHICLE:
				return elements.filter((t: { elementType: any }) => t.elementType === "vehicle");
			case elFilter.SHOW_WARDROBE:
				return elements.filter((t: { elementType: any }) => t.elementType === "wardrobe");
			case elFilter.SHOW_CAST:
				return elements.filter((t: { elementType: any }) => t.elementType === "cast");
			case elFilter.SHOW_STORYBOARD:
				return elements.filter((t: { elementType: any }) => t.elementType === "storyboard");
			default:
				throw new Error("Unknown filter: " + visibilityFilter);
		}
	}
);
