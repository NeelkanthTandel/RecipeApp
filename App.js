import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import MealNavigator from "./Navigation/MealNavigator";
import Meal from "./store/reducers/Meal";

enableScreens(true);

const rootReducer = combineReducers({
   meals: Meal,
});
const store = createStore(rootReducer);

const fetchFont = () => {
   return Font.loadAsync({
      "open-sans": require("./assets/Fonts/OpenSans-Regular.ttf"),
      "open-sans-bold": require("./assets/Fonts/OpenSans-Bold.ttf"),
   });
};

export default function App() {
   const [fontLoaded, setFontLoaded] = useState(false);

   if (!fontLoaded) {
      return (
         <AppLoading
            startAsync={fetchFont}
            onFinish={() => setFontLoaded(true)}
            onError={(err) => console.log(err)}
         />
      );
   }

   return (
      <Provider store={store}>
         <MealNavigator />
      </Provider>
   );
}
