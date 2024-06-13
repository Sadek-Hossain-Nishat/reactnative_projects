import React from 'react'
import { ChildrenProps } from '../utis/Types'
import { View } from 'react-native'

const Row = ({children}:ChildrenProps) => {
  return (
    <View style={{flexDirection:'row'}}>
        {children}
    </View>
  )
}

export default Row