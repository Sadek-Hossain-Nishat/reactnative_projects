
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const myHtmlFile = require('../html_assets/index.html');

const GradientText = () => {
  // return <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1 }} />;
  return (


    <View style={{flex:1,flexDirection:'column'}}>

      <View style={{flexDirection:'row',marginStart:45,marginTop:10,justifyContent:'space-between',marginEnd:45}}>

        <Text style={{fontSize:25,fontWeight:'800'}}>Home</Text>
        <Text style={{fontSize:25,fontWeight:'800'}}>Settings</Text>





      </View>

      <WebView source={myHtmlFile} style={{ flex: .3 }} />
    </View>

  ) ;


   
    
  


  
  ;
   
  
}

export default GradientText