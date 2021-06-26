import React from "react";
import {
   StyleSheet,
   View,
   Text,
   ImageBackground,
   TouchableOpacity,
} from "react-native";

import DefaultText from "./DefaultText";
import Colors from "../constants/Colors";

const MealItem = (props) => {
   return (
      <View style={styles.tile}>
         <TouchableOpacity onPress={props.onSelect} activeOpacity={0.3}>
            <View style={styles.headerContainer}>
               <ImageBackground
                  source={{ uri: props.imageUrl }}
                  style={styles.bgImage}
               >
                  <View style={styles.titleContainer}>
                     <Text style={styles.title} numberOfLines={1}>
                        {props.title}
                     </Text>
                  </View>
               </ImageBackground>
            </View>
            <View style={styles.mealDetail}>
               <DefaultText>{props.duration}m</DefaultText>
               <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
               <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
            </View>
         </TouchableOpacity>
      </View>
   );
};

const styles = StyleSheet.create({
   tile: {
      height: 200,
      width: "100%",
      backgroundColor: "#dcdcdc",
      borderRadius: 10,
      overflow: "hidden",
      marginBottom: 25,
   },
   headerContainer: {
      height: "83%",
   },
   bgImage: {
      height: "100%",
      width: "100%",
      justifyContent: "flex-end",
   },
   titleContainer: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
   },
   title: {
      color: Colors.titleColor,
      fontFamily: "open-sans-bold",
      fontSize: 17,
   },
   mealDetail: {
      height: "17%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 13,
   },
});

export default MealItem;
