import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { FC, ReactElement } from 'react'
import { normalize } from '../utils/normalize'
import { colors } from '../utils/colors'
import { fontFamily, fontSize } from '../utils/variables'



const CustomTextInput = ({
  textRef,
  leftIcon,
  containerStyle,
  inputStyle,
  placeholder = "Type...",
  placeholderTextColor,
  keyboardType="default",
  onChangeText=undefined,
  maxLength=undefined
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {
        leftIcon &&
        leftIcon
      }
      <TextInput
        // ref={(ref) => {
        //   console.log(ref);
        // }}
        style={[styles.input,inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        maxLength={maxLength}
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
    alignItems: 'center',
    overflow:'hidden'
  },
  input: {
    flex: 1,
    paddingLeft: normalize(8),
    color: colors.black,
    fontSize: fontSize.font12,
    fontFamily: fontFamily.regular,
    marginTop: 3
  }

})