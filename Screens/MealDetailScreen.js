import React, { useCallback, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import HeaderButton from "../Components/HeaderButton";
import Colors from "../constants/Colors";
import DefaultText from "../Components/DefaultText";
import StepList from "../Components/StepList";
import { toggleFavourite } from "../store/actions/Meal";

const MealDetailsScreen = (props) => {
   const mealId = props.navigation.getParam("id");
   const isFavMeal = useSelector((state) =>
      state.meals.favMeals.some((meal) => meal.id === mealId)
   );
   const meals = useSelector((state) => state.meals.meals);
   const selectedMeal = meals.find((meal) => meal.id === mealId);

   const dispatch = useDispatch();

   const toggleFavHandler = useCallback(() => {
      dispatch(toggleFavourite(mealId));
   }, [dispatch, mealId]);

   useEffect(() => {
      props.navigation.setParams({ toggleFav: toggleFavHandler });
   }, [toggleFavHandler]);

   useEffect(() => {
      props.navigation.setParams({ isFav: isFavMeal });
   }, [isFavMeal]);

   return (
      <ScrollView>
         <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
         <View style={styles.mealDetail}>
            <DefaultText>{selectedMeal.duration}m</DefaultText>
            <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
            <DefaultText>
               {selectedMeal.affordability.toUpperCase()}
            </DefaultText>
         </View>
         <View style={{ paddingHorizontal: 20 }}>
            <Text style={styles.dishName}>{selectedMeal.title}</Text>
         </View>
         <Text style={styles.title}>Ingredients</Text>
         <View style={{ paddingHorizontal: 15 }}>
            {selectedMeal.ingredients.map((ing) => (
               <StepList key={ing}>{ing}</StepList>
            ))}
         </View>
         <Text style={styles.title}>Steps</Text>
         <View style={{ paddingHorizontal: 15 }}>
            {selectedMeal.steps.map((step) => (
               <StepList key={step}>{step}</StepList>
            ))}
         </View>
      </ScrollView>
   );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
   const mealTitle = navigationData.navigation.getParam("title");
   const toggleFav = navigationData.navigation.getParam("toggleFav");
   const isFav = navigationData.navigation.getParam("isFav");

   return {
      title: mealTitle,
      headerRight: () => (
         <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
               title="favourite"
               iconName={isFav ? "ios-star" : "ios-star-outline"}
               color={Colors.primaryColor}
               onPress={toggleFav}
            />
         </HeaderButtons>
      ),
   };
};

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
   image: {
      height: 200,
      width: "100%",
   },
   mealDetail: {
      height: 30,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 13,
      backgroundColor: "#dcdcdc",
   },
   dishName: {
      color: Colors.primaryColor,
      marginTop: 20,
      textAlign: "center",
      fontFamily: "open-sans-bold",
      fontSize: 23,
   },
   title: {
      marginLeft: 15,
      fontFamily: "open-sans-bold",
      fontSize: 20,
      marginVertical: 20,
   },
});

export default MealDetailsScreen;
