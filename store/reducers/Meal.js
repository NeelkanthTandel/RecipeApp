import { MEALS } from "../../Data/dummy-data";
import { TOGGLE_FAV, SET_FILTER } from "../actions/Meal";

const initialState = {
   meals: MEALS,
   filteredMeals: MEALS,
   favMeals: [],
};

const mealsReducer = (state = initialState, action) => {
   switch (action.type) {
      case TOGGLE_FAV:
         const existingIndex = state.favMeals.findIndex(
            (meals) => meals.id === action.mealId
         );
         if (existingIndex >= 0) {
            const updatedFavMeals = [...state.favMeals];
            updatedFavMeals.splice(existingIndex, 1);
            return { ...state, favMeals: updatedFavMeals };
         } else {
            const newMeal = state.meals.find(
               (meal) => meal.id === action.mealId
            );
            return { ...state, favMeals: state.favMeals.concat(newMeal) };
         }

      case SET_FILTER:
         const appliedFilter = action.filter;
         const updatedFilteredMeals = state.meals.filter((meal) => {
            if (appliedFilter.glutenFree && !meal.isGlutenFree) {
               return false;
            }
            if (appliedFilter.lactoseFree && !meal.isLactoseFree) {
               return false;
            }
            if (appliedFilter.vegan && !meal.isVegan) {
               return false;
            }
            if (appliedFilter.vegetarian && !meal.isVegetarian) {
               return false;
            }
            return true;
         });
         return { ...state, filteredMeals: updatedFilteredMeals };

      default:
         return state;
   }
};

export default mealsReducer;
