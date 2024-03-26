import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { normalize } from '../utils/normalize'
import { colors } from '../utils/colors'

const OnlineCircle = ({
    containerStyle=null
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      
    </View>
  )
}

export default React.memo(OnlineCircle)

const styles = StyleSheet.create({
    container:{
        width: normalize(10),
        height: normalize(10),
        borderRadius: normalize(10),
        backgroundColor: colors.yellow1,
    }
})