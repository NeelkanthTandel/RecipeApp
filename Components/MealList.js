import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

import MealItem from "../Components/MealItem";

const MealList = (props) => {
   const renderMealItem = (itemData) => (
      <MealItem
         title={itemData.item.title}
         imageUrl={itemData.item.imageUrl}
         complexity={itemData.item.complexity}
         duration={itemData.item.duration}
         affordability={itemData.item.affordability}
         onSelect={() =>
            props.navigation.navigate({
               routeName: "MealDetail",
               params: { id: itemData.item.id, title: itemData.item.title },
            })
         }
      />
   );
   return (
      <View style={styles.list}>
         <FlatList
            data={props.listData}
            renderItem={renderMealItem}
            style={{ width: "100%" }}
            showsVerticalScrollIndicator={false}
         />
      </View>
   );
};

const styles = StyleSheet.create({
   list: {
      flex: 1,
      alignItems: "center",
      padding: 20,
   },
});

export default MealList;
