import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, FlatList,TouchableOpacity,Image } from "react-native";

const { width, height } = Dimensions.get("window");
var e;

class ViewInformationStudent extends Component {
  constructor(props) {
    super(props);
    e = this;
    this.state = {
      data: [
        { _id: 1, email: "dodangphat99@gmail.com", fullname: "Phat Do" },
        { _id: 2, email: "minhnha2308@gmail.com", fullname: "Minh Nha" },
        { _id: 3, email: "hoang.phamphu@gmail.com", fullname: "Hoang Pham" },
        { _id: 4, email: "nguyencaonguyencmu@gmail.com", fullname: "Cao Nguyen" },
        { _id: 5, email: "nguyenquanghuy9x@gmail.com", fullname: "Quang Huy" },
        { _id: 6, email: "nguyendinhtron9xxx@gmail.com", fullname: "Dinh Trong" },
      ],
    };
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems:'center'}}>
        <FlatList
          data={this.state.data}
          renderItem={({ item, index }) => {
            return <RenderItem item={item}></RenderItem>;
          }}
          keyExtractor={(item) => item._id.toString()}
        ></FlatList>
      </View>
    );
  }
}

class RenderItem extends React.Component {
  render() {
    return (
      <View style={styles.image_container}>
        <View
          style={{ flexDirection: "row" }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 10,
              height: 55,
              width: 55,
              backgroundColor: "white",
              shadowOffset: { width: 0, height: 3 },
              shadowColor: "#e60000",
              shadowOpacity: 0.5,
              elevation: 10,
              borderColor: "#e60000",
              borderRadius: 50,
            }}
          >
            <Image
              source={{uri: "https://vn-school.s3-ap-northeast-1.amazonaws.com/school/649/hoc-vien-ky-thuat-mat-ma-co-so-phia-nam-0-KDcx1I.jpg",}}
              style={styles.image}
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              marginLeft: 10,
              alignItems: "flex-start",
              width: width - 180,
            }}
          >
            <Text style={[styles.name, { color: "black" }]}>
              {this.props.item.email}
            </Text>
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              {this.props.item.fullname}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image_container:{
      paddingVertical:10,
      paddingHorizontal:10,
      flexDirection:'row',
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center',
      width:width-60,
      backgroundColor:'rgba(200,200,200,0.3)',
      margin:10,
      borderWidth:1,
      borderColor:'#e60000'
  },
  image:{
    width:50,
    height:50,borderRadius:50
  },
});

export default ViewInformationStudent;
