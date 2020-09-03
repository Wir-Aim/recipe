import React, { Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

export default class BakedHoney extends Component {
    render(){
        return(
        <View>
            {/* <Text>Hello World</Text> */}
            <Image source={require('../images/thirdRecipe.jpg')} />
        </View>
        )
    }
};
