/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  ImageBackground,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {
  
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import Icon from 'react-native-vector-icons/MaterialIcons';

const mainHeader = () =>  {
  


  return (
  <View>
      
  <View style={styles.viewStyle}> 
    <Icon style={styles.icons} size={30} name="arrow-back"></Icon>
    <Text style={{fontSize:20, fontWeight:"bold", color:'black',textAlign:"center" , textAlignVertical:"center"}}>Main Header</Text>
    <Icon size={30} name="menu"></Icon>
  </View >
  
  <View style={styles.inputView}>
    
  <TextInput style={styles.inputStyle}
  placeholder="Search"
  /> 
  </View>
  <ScrollView>
  <TouchableOpacity onPress={()=> console.log("Hello")}>
  <View style={styles.imageView} >
  <Image style={styles.imageStyle} source={require('./images/firstRecipe.jpg')} />
  <Text style={styles.imageName} >Chorizo & Mozzarella Gnocchi</Text>
  </View>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=> console.log("Hello")}>
  <View style={styles.imageView} >
  <Image style={styles.imageStyle} source={require('./images/secondRecipe.jpg')} />
  <Text style={styles.imageName}>One-Pan Roast Chicken</Text>
  </View>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=> console.log("Hello")}>
  <View style={styles.imageView} >
  <Image style={styles.imageStyle} source={require('./images/thirdRecipe.jpg')} />
  <Text style={styles.imageName}>Baked Honey Glazed Chicken</Text>
  </View>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=> console.log("Hello")}>
  <View style={styles.imageView} >
  <Image style={styles.imageStyle} source={require('./images/fourthRecipe.jpg')} />
  <Text style={styles.imageName}>Tuscan Chicken Skillet</Text>
  </View>
  </TouchableOpacity>
  </ScrollView>
  </View>
  
    
  
     
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection : 'row',
    justifyContent: "space-between",
    padding:20
  },
  inputView: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 10
    
  },
  inputStyle: {
    width: "90%",
    backgroundColor: '#f0f0f0' ,
    borderColor:'gray',
    height: 50,
    borderRadius:10,
    paddingLeft: 20,
    
  },
  imageView: {
    flexDirection: "column",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15
  },
  imageName: {
    fontWeight: "bold",
    color: "#239f5d",
    padding: 10
  },
  imageStyle: {
    borderRadius: 20,
    width: "100%",
    height: 150,
  }

  
});

 

export default mainHeader;
