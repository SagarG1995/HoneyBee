import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { normalize } from '../utils/normalize'

const LottieAnim = ({
    source,
    style,
}) => {
  return (
    <LottieView
      source={source}
      autoPlay
      loop
      style={[styles.lottie, style]}
    />
  )
}

export default React.memo(LottieAnim)

const styles = StyleSheet.create({
    lottie:{
        height: normalize(50),
        width: normalize(50)
    }
})