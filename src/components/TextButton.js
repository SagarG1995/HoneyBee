import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { fontFamily, fontSize } from '../utils/variables'
import { colors } from '../utils/colors'
import { normalize } from '../utils/normalize'

const TextButton = ({
    title
}) => {
  return (
    <TouchableOpacity >
      <Text style={styles.btnTxt}>{title}</Text>
    </TouchableOpacity>
  )
}

export default React.memo(TextButton)

const styles = StyleSheet.create({
    container:{
        // flexDirection:'row'
    },
    btnTxt:{
        fontFamily: fontFamily.bold,
        color: colors.neonBlue,
        fontSize: fontSize.font10
    }
})