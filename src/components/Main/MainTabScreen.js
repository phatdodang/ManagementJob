import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Home/Home";

var e;
const HomeStack = createStackNavigator();

export default class MainTabScreen extends React.Component {
  constructor(props) {
    super(props);
    e = this;
  }
  render() {
    return (
      <HomeStack.Navigator
        screenOptions={{
          headerStyle: {
            elevation: 0, // Android
          },

          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <HomeStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </HomeStack.Navigator>
    );
  }
}
