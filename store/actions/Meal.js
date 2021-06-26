export const TOGGLE_FAV = "TOGGLE_FAV";
export const SET_FILTER = "SET_FILTER";

export const toggleFavourite = (id) => {
   return { type: TOGGLE_FAV, mealId: id };
};

export const setFilter = (filterSettings) => {
   return { type: SET_FILTER, filter: filterSettings };
};
