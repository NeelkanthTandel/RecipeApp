import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import HeaderButton from "../Components/HeaderButton";
import MealList from "../Components/MealList";
import DefaultText from "../Components/DefaultText";

const FavouriteScreen = (props) => {
   const favMeals = useSelector((state) => state.meals.favMeals);
   if (favMeals.length === 0 || !favMeals) {
      return (
         <View style={styles.content}>
            <DefaultText>
               No favourite meal found. Start adding some!
            </DefaultText>
         </View>
      );
   }
   return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavouriteScreen.navigationOptions = (navData) => {
   return {
      title: "Your Favourites",
      headerLeft: () => (
         <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
               title="menu"
               iconName="ios-menu"
               onPress={() => navData.navigation.toggleDrawer()}
            />
         </HeaderButtons>
      ),
   };
};

const styles = StyleSheet.create({
   content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
});

export default FavouriteScreen;
