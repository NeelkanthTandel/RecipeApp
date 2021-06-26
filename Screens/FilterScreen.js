import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, Text, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";

import HeaderButton from "../Components/HeaderButton";
import Colors from "../constants/Colors";
import { setFilter } from "../store/actions/Meal";

const Filter = (props) => (
   <View style={styles.filterContainer}>
      <Text style={styles.label}>{props.label}</Text>
      <Switch
         value={props.state}
         onValueChange={props.onChange}
         trackColor={{ true: Colors.primaryColor, false: "#ccc" }}
         thumbColor="white"
      />
   </View>
);

const FilterScreen = (props) => {
   const { navigation } = props;

   const [isGlutenFree, setIsGlutenFree] = useState(false);
   const [isLactoseFree, setIsLactoseFree] = useState(false);
   const [isVegan, setIsVegan] = useState(false);
   const [isVegetarian, setIsVegetarian] = useState(false);

   const [isSaved, setIsSaved] = useState(false);

   const dispatch = useDispatch();

   const saveFilter = useCallback(() => {
      const appliedFilter = {
         glutenFree: isGlutenFree,
         vegan: isVegan,
         vegetarian: isVegetarian,
         lactoseFree: isLactoseFree,
      };
      dispatch(setFilter(appliedFilter));
      setIsSaved(true);
   }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

   useEffect(() => {
      navigation.setParams({ save: saveFilter });
   }, [saveFilter]);

   useEffect(() => {
      navigation.setParams({ isSaved: isSaved });
   }, [isSaved, saveFilter]);

   useEffect(() => {
      setIsSaved(false);
      navigation.setParams({ isSaved: isSaved });
   }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

   return (
      <View style={styles.screen}>
         <Text style={styles.title}>Available Filters / Restrictions</Text>

         <Filter
            label="Gluten-free"
            state={isGlutenFree}
            onChange={(newVal) => setIsGlutenFree(newVal)}
         />
         <Filter
            label="Lactose-free"
            state={isLactoseFree}
            onChange={(newVal) => setIsLactoseFree(newVal)}
         />
         <Filter
            label="Vegan"
            state={isVegan}
            onChange={(newVal) => setIsVegan(newVal)}
         />
         <Filter
            label="Vegetarian"
            state={isVegetarian}
            onChange={(newVal) => setIsVegetarian(newVal)}
         />
      </View>
   );
};

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      alignItems: "center",
   },
   title: {
      textAlign: "center",
      fontSize: 20,
      fontFamily: "open-sans-bold",
      margin: 20,
   },
   filterContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "80%",
      marginVertical: 15,
   },
   label: {
      fontFamily: "open-sans",
      fontSize: 16,
   },
});

FilterScreen.navigationOptions = (navData) => {
   const isSaved = navData.navigation.getParam("isSaved");

   return {
      title: "Filter Meals",
      headerLeft: () => (
         <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
               title="menu"
               iconName="ios-menu"
               onPress={() => navData.navigation.toggleDrawer()}
            />
         </HeaderButtons>
      ),
      headerRight: () => (
         <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
               title="save"
               iconName={isSaved ? "checkmark-done" : "checkmark"}
               onPress={navData.navigation.getParam("save")}
            />
         </HeaderButtons>
      ),
   };
};

export default FilterScreen;
