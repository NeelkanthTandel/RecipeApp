import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../Components/HeaderButton";
import CategoryGridTile from "../Components/CategoryGridTile";
import { CATEGORIES } from "../Data/dummy-data";

const CategoriesScreen = (props) => {
   const renderGridItem = (itemData) => {
      return (
         <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            imageUrl={itemData.item.imageUrl}
            onSelect={() =>
               props.navigation.navigate({
                  routeName: "CategoryMeal",
                  params: {
                     categoryId: itemData.item.id,
                  },
               })
            }
         />
      );
   };
   return (
      <View style={styles.screen}>
         <FlatList
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
         />
      </View>
   );
};

CategoriesScreen.navigationOptions = (navData) => {
   return {
      title: "Meals Category",
      headerLeft: () => (
         <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
               title="menu"
               iconName="ios-menu"
               color="black"
               onPress={() => navData.navigation.toggleDrawer()}
            />
         </HeaderButtons>
      ),
   };
};

const styles = StyleSheet.create({
   screen: {
      flex: 1,
   },
});

export default CategoriesScreen;
