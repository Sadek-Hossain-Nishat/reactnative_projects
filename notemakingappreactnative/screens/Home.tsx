import { View, Text } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types'
import { RootNavigationProps } from '../src/AppNavigator'
interface MyProps{
  navigation:StackNavigationProp<RootNavigationProps,'Home'>
}
const Home = ({navigation}:MyProps) => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home