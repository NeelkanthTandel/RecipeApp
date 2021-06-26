import React from "react";
import {
   StyleSheet,
   Text,
   View,
   TouchableOpacity,
   Platform,
   ImageBackground,
   TouchableHighlight,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/Colors";

const CategoryGridTile = (props) => {
   let TouchableCmp = TouchableOpacity;

   if (Platform.OS === "android" && Platform.Version >= 21) {
      TouchableCmp = TouchableHighlight;
   }
   return (
      <View style={styles.container}>
         <TouchableCmp onPress={props.onSelect} style={{ flex: 1 }}>
            <View
               style={{
                  ...styles.gridItem,
               }}
            >
               <ImageBackground
                  source={{ uri: props.imageUrl }}
                  style={styles.imageBg}
               >
                  <LinearGradient
                     colors={["transparent", "rgba(0, 0, 0, 0.35)", "black"]}
                     style={{
                        padding: 10,
                        alignItems: "flex-end",
                        justifyContent: "flex-end",
                        position: "relative",
                        width: "100%",
                        height: "100%",
                     }}
                  >
                     <Text style={styles.title}>{props.title}</Text>
                  </LinearGradient>
               </ImageBackground>
            </View>
         </TouchableCmp>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      margin: 10,
      height: 120,
      borderRadius: 8,
      overflow:
         Platform.OS === "android" && Platform.Version >= 21 ? "hidden" : null,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.26,
      shadowRadius: 10,
      elevation: 3,
   },
   gridItem: {
      width: "100%",
      height: "100%",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      borderRadius: 8,
   },
   imageBg: {
      width: "100%",
      height: "100%",
   },
   titleContainer: {},
   title: {
      fontFamily: "open-sans-bold",
      fontSize: 15,
      color: Colors.titleColor,
   },
});

export default CategoryGridTile;
