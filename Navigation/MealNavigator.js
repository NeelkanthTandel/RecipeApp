import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import CategoriesScreen from "../Screens/CategoriesScreen";
import CategoryMealScreen from "../Screens/CategoryMealScreen";
import MealDetailsScreen from "../Screens/MealDetailScreen";
import FavouriteScreen from "../Screens/FavouriteScreen";
import FilterScreen from "../Screens/FilterScreen";
import { StatusBar } from "react-native";

const defStackStyle = {
   headerStyle: {
      backgroundColor: Colors.titleColor,
   },
   headerTitleStyle: {
      fontFamily: "open-sans-bold",
   },
   headerBackTitleStyle: {
      fontFamily: "open-sans",
   },
   headerTintColor: Colors.primaryColor,
   headerTitleAlign: "center",
};

const FilterNavigator = createStackNavigator(
   {
      Filter: FilterScreen,
   },
   {
      defaultNavigationOptions: defStackStyle,
   }
);

const MealNavigator = createStackNavigator(
   {
      Categories: CategoriesScreen,
      CategoryMeal: CategoryMealScreen,
      MealDetail: MealDetailsScreen,
   },
   {
      defaultNavigationOptions: defStackStyle,
   }
);

const FavNavigator = createStackNavigator(
   {
      Favourites: FavouriteScreen,
      MealDetail: MealDetailsScreen,
   },
   {
      defaultNavigationOptions: defStackStyle,
   }
);

const AppBtmNavigator = createBottomTabNavigator(
   {
      Meal: {
         screen: MealNavigator,
         navigationOptions: {
            tabBarIcon: (tabInfo) => {
               return (
                  <Ionicons
                     name={"ios-restaurant"}
                     size={25}
                     color={tabInfo.tintColor}
                  />
               );
            },
         },
      },
      Favourites: {
         screen: FavNavigator,
         navigationOptions: {
            tabBarLabel: "Favourites!",
            tabBarIcon: (tabInfo) => {
               return (
                  <Ionicons
                     name={"ios-star"}
                     size={25}
                     color={tabInfo.tintColor}
                  />
               );
            },
         },
      },
   },
   {
      tabBarOptions: {
         labelStyle: {
            fontFamily: "open-sans",
         },
         activeTintColor: Colors.accentColor,
      },
   }
);

const MainNavigator = createDrawerNavigator(
   {
      MealsFav: {
         screen: AppBtmNavigator,
         navigationOptions: {
            drawerLabel: "Meals",
            drawerIcon: <Ionicons name="ios-restaurant" size={23} />,
         },
      },
      Filter: {
         screen: FilterNavigator,
         navigationOptions: {
            drawerIcon: <FontAwesome name="filter" size={23} />,
         },
      },
   },
   {
      contentOptions: {
         activeTintColor: Colors.accentColor,
         labelStyle: {
            fontFamily: "open-sans-bold",
         },
         itemsContainerStyle: {
            marginTop: StatusBar.currentHeight,
         },
      },
   }
);

export default createAppContainer(MainNavigator);
