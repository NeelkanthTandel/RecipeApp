import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";

import MealList from "../Components/MealList";
import { CATEGORIES } from "../Data/dummy-data";
import DefaultText from "../Components/DefaultText";

const CategoryMealScreen = (props) => {
   const catId = props.navigation.getParam("categoryId");
   const availableMeals = useSelector((state) => state.meals.filteredMeals);

   const displayedMeals = availableMeals.filter(
      (meal) => meal.categoryIds.indexOf(catId) >= 0
   );

   if (displayedMeals.length === 0 || !displayedMeals) {
      return (
         <View style={styles.content}>
            <DefaultText>No meal found. Maybe check your filter?</DefaultText>
         </View>
      );
   }

   return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = (navigationData) => {
   const catId = navigationData.navigation.getParam("categoryId");
   const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

   return {
      title: selectedCategory.title,
   };
};

const styles = StyleSheet.create({
   content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
});

export default CategoryMealScreen;
