import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { FC, ReactElement } from 'react'
import { normalize } from '../utils/normalize'
import { colors } from '../utils/colors'



const CustomTextInput = ({
  leftIcon,
  containerStyle,
  placeholder = "Type...",
  iconColor = colors.white,
  placeholderTextColor
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {
        leftIcon &&
        leftIcon
      }
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  )
}

export default React.memo(CustomTextInput)

const styles = StyleSheet.create({

  container: {
    height: normalize(40),
    borderBottomColor: colors.white,
    borderBottomWidth: normalize(1),
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    // backgroundColor: 'red',
    paddingLeft: normalize(8)
  }

})