import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textBlue}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Image style={styles.imgSize} source={require('./img/fb.png')} />
    </View>
  );
}


const styles = StyleSheet.create({

    container:{
      flex:1,
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent:'center'
    },

    textBlue:{
      color:'blue'
    },

    imgSize:{
      width:50,
      height:50
    }


});

