import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native'

const { width: WIDTH } = Dimensions.get('window')
var e;

class ViewInformationStudent extends Component {
    constructor(props) {
        super(props)
        e = this;
    }
    render() {
        return (
            <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                <Text>This is ViewInformationStudent Screen</Text>
            </View>
        )
    }
}

export default ViewInformationStudent;