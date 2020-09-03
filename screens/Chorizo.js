import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    StyleSheet,
    Dimensions
} from 'react-native';

import Back from 'react-native-vector-icons/MaterialIcons';
import Menu from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

export default class Chorizo extends Component {
    render(){
        return(
        <View>
            {/* <Text>Hello World</Text> */}
            <TouchableOpacity style={styles.viewStyle}>    
            <Back style={styles.icon}  size={30} name="arrow-back" onPress={()=> this.props.navigation.goBack()}/>
            </TouchableOpacity>
            <Image style={styles.bgimg} source={require('../images/firstRecipe.jpg')}/>
            <TouchableOpacity style={styles.viewStyle}>    
            <Menu style={styles.icon} size={30} name="menu"/>
            </TouchableOpacity>
            
        </View>
        )
    }
};

const styles = StyleSheet.create({
    bgimg: {
    position: "absolute",
    width: "100%",
    height: "500%",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50
    
},
icon:{
    color: "white",
},
viewStyle: {
    // color: "white",
    flexDirection : 'row',
    justifyContent: "space-between",
    padding:20
}

});
