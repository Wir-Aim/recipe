import React, { Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

export default class RoastChicken extends Component {
    render(){
        return(
        <View>
            {/* <Text>Hello World</Text> */}
            <Image source={require('../images/secondRecipe.jpg')} />
        </View>
        )
    }
};
