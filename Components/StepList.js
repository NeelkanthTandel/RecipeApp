import React from "react";
import { StyleSheet, Text, View } from "react-native";

const StepList = (props) => {
   return (
      <View style={styles.container}>
         <Text style={styles.text}>{props.children}</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      width: "100%",
      marginBottom: 15,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      padding: 10,
   },
   text: {
      fontFamily: "open-sans",
   },
});

export default StepList;
