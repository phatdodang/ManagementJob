import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Home/Home";
import ApproveAccount from "../adminPage/ApproveAccount";
import ApprovePostTask from "../adminPage/ApprovePostTask";
import ApproveRequestStudent from "../adminPage/ApproveRequestStudent";
import ChangePassword from "../adminPage/ChangePassword";
import CreateAccountAdmin from "../adminPage/CreateAccountAdmin";
import CreateAccountStudent from "../adminPage/CreateAccountStudent";
import DeleteAccount from "../adminPage/DeleteAccount";
import UploadAvatar from "../adminPage/UploadAvatar";
import ViewInformationStudent from "../adminPage/ViewInformationStudent";
import ViewPostTask from "../adminPage/ViewPostTask";
import ViewRecruiter from "../adminPage/ViewRecruiter";
import ViewVote from "../adminPage/ViewVote";

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
        <HomeStack.Screen
          name="ApproveAccount"
          component={ApproveAccount}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="ApprovePostTask"
          component={ApprovePostTask}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="ApproveRequestStudent"
          component={ApproveRequestStudent}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="CreateAccountAdmin"
          component={CreateAccountAdmin}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="CreateAccountStudent"
          component={CreateAccountStudent}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="DeleteAccount"
          component={DeleteAccount}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="UploadAvatar"
          component={UploadAvatar}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="ViewInformationStudent"
          component={ViewInformationStudent}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="ViewPostTask"
          component={ViewPostTask}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="ViewRecruiter"
          component={ViewRecruiter}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="ViewVote"
          component={ViewVote}
          options={{ headerShown: false }}
        />
      </HomeStack.Navigator>
    );
  }
}
