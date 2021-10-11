import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

import Collapsible from "react-native-collapsible";

import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
var e;

class Menu extends Component {
  constructor(props) {
    super(props);
    e = this;
    this.state = {
      collapsed: true,
      showPass: true,
      press: false,
    };
  }

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  showPass = () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true });
    } else {
      this.setState({ showPass: true, press: false });
    }
  };
  render() {
    return (
      <View style={{ flex: 1,paddingTop:50,backgroundColor:'white' }}>
          <View style={styles.header}>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  borderColor: "#bfbfbf",
                  shadowOffset: { width: 0, height: 3 },
                  shadowOpacity: 0.5,
                  height: 120,
                  borderRadius: 30,
                  width: 150,
                  marginTop: 10,
                  borderColor: "green",
                  marginLeft: 10,
                  elevation: 10,
                }}
              >
                <Image
                  source={{
                    uri: "https://vn-school.s3-ap-northeast-1.amazonaws.com/school/649/hoc-vien-ky-thuat-mat-ma-co-so-phia-nam-0-KDcx1I.jpg",
                  }}
                  style={styles.Image}
                />
              </View>
              <View
                style={{
                  flexDirection: "column",
                  marginTop: 45,
                  marginRight: 25,
                  marginLeft: 20,
                }}
              >
                <View>
                  <Text style={{ fontWeight: "bold", fontSize: 30 }}>
                    Administrator
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.body}>
            <View
              style={{
                marginTop: 10,
                paddingTop: 8,
              }}
            ></View>
            <View
              style={{
                flexDirection: "row",
                borderBottomWidth: 2,
                borderColor: "#bfbfbf",
                height: height * 0.07,
              }}
            >
              <Ionicons
                style={{ marginLeft: 20 }}
                name="md-settings"
                size={30}
                color="black"
              />
              <Text style={{ fontSize: 23, marginLeft: 15 }}>Settings</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={this.toggleExpanded}
                style={{ flexDirection: "row", marginLeft: 5 }}
              >
                <View style={styles.texticon}>
                  <Text style={styles.text}>Change Password</Text>
                </View>
              </TouchableOpacity>
              <Collapsible collapsed={this.state.collapsed}>
                <View style={{ flexDirection: "column", alignItems: "center",borderWidth:1,margin:10,paddingBottom:20,marginBottom:0,borderRadius:5,borderColor:'#bfbfbf' }}>
                  <TextInput
                    style={styles.input}
                    placeholder={"Password"}
                    placeholderTextColor={"grey"}
                    underlineColorAndroid="transparent"
                    secureTextEntry={this.state.showPass}
                  ></TextInput>
                  <TextInput
                    style={styles.input}
                    placeholder={"New Password"}
                    placeholderTextColor={"grey"}
                    underlineColorAndroid="transparent"
                    secureTextEntry={this.state.showPass}
                  ></TextInput>
                  <TextInput
                    style={styles.input}
                    placeholder={"Confirm new Password"}
                    placeholderTextColor={"grey"}
                    underlineColorAndroid="transparent"
                    secureTextEntry={this.state.showPass}
                  ></TextInput>
                  <View>
                    <Text>{""}</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.btnLogin}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#ffff",
                      }}
                    >
                      Save
                    </Text>
                  </TouchableOpacity>
                </View>
              </Collapsible>
            </View>
            <TouchableOpacity
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row", marginLeft: 5,justifyContent: "space-between",width:width}}>
                <View style={styles.texticon}>
                  <Text style={styles.text}>Approve Request Student</Text>
                </View>
                <View style={styles.iconstyle}>
                <MaterialIcons name="navigate-next" size={30} color="black" />
              </View>
              </View>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", marginLeft: 5 }}>
              <View style={styles.texticon}>
                <Text style={styles.text}>Help</Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                marginTop: 5,
                height: height * 0.07,
                paddingTop: 8,
                marginBottom: 10,
              }}
            >
              <View style={styles.iconstyle}>
                <AntDesign name="logout" size={30} color="black" />
              </View>
              <View style={styles.texticon}>
                <Text style={styles.text}>Log out</Text>
              </View>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: height * 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    elevation: 2,
    flexDirection: "column",
  },
  iconstyle: {
    marginTop: 10,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  texticon: {
    width: 300,
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
  },
  btnLogin: {
    width: 300,
    height: 45,
    borderRadius: 10,
    backgroundColor: "#e60000",
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowOpacity: 0.2,
    elevation: 1,
  },
  input: {
    width: 300,
    height: 40,
    borderRadius: 10,
    fontSize: 16,
    paddingLeft: 20,
    paddingTop: -10,
    borderWidth: 1,
    backgroundColor: "#fff",
    color: "#bfbfbf",
    marginHorizontal: 25,
    marginTop: 10,
  },
  iconmore: {
    marginLeft: 15,
    marginTop: 10,
  },
  body: {
    borderColor: "#bfbfbf",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowOpacity: 0.2,
    elevation: 2,
    marginTop: 5,
  },
  Image: {
    height: 119,
    width: 149,
    borderRadius: 30,
  },
  header0: {
    height: height * 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    paddingLeft: 10,
    paddingTop: 15,
    shadowOpacity: 0.2,
    elevation: 1,
  },
});

export default Menu;
