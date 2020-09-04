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
import Heart from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

export default class Chorizo extends Component {
    render(){
        return(
        <View style={{
            flexDirection: "column",
            
        }}>
            {/* <Text>Hello World</Text> */}
            <View style={styles.viewStyle} >
            <Image style={styles.bgimg} source={require('../images/firstRecipe.jpg')}/>
            <TouchableOpacity >    
            <Back style={styles.icon}  size={30} name="arrow-back" onPress={()=> this.props.navigation.goBack()}/>
            </TouchableOpacity>
            <TouchableOpacity >    
            <Heart style={styles.icon} size={30} name="heart"/>
            </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.imageName} >Chorizo & Mozzarella Gnocchi</Text>
            </View>
        </View>
        )
    }
};

const styles = StyleSheet.create({
    bgimg: {
    position: "absolute",
    width: width * 1 ,
    height: height * .5,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50
    
},
icon:{
    color: "white",
    padding: 20
},
viewStyle: {
    // color: "white",
    flexDirection : 'row',
    justifyContent: "space-between",
    // padding:20
},
imageName: {
    fontWeight: "bold",
    fontSize: width * .07,
    // color: "#239f5d",
}

});
