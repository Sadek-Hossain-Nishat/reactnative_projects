import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootNavigationProps } from '../src/AppNavigator'


interface MyProps{
  navigation:StackNavigationProp<RootNavigationProps,'Splash'>
}

const Splash = ({navigation}:MyProps) => {

  useEffect(() => {

    setTimeout(() => {

      navigation.navigate("Login")
      
    },2000);
    
    return () => {
    
    }
  }, [])
  
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Notes App</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center'
  },
  logo:{
    color:'white',
    fontSize:30
  }

})