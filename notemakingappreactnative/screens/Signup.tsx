import { View, Text } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootNavigationProps } from '../src/AppNavigator'
interface MyProps{
  navigation:StackNavigationProp<RootNavigationProps,'Signup'>
}
const Signup = ({navigation}:MyProps) => {
  return (
    <View>
      <Text>Signup</Text>
    </View>
  )
}

export default Signup