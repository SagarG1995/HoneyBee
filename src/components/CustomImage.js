import { ActivityIndicator, StyleSheet, Text, View, ImageRequireSource } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import FastImage, { ResizeMode } from 'react-native-fast-image'
import { colors } from '../utils/colors'
import { fontFamily } from '../utils/variables'
import { normalize } from '../utils/normalize'

const CustomImage = ({
  source,
  resizeMode,
  style = null,
  tintColor
}) => {

  const [resizeModeState, setResizeModeState] = useState("contain")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (resizeMode === 'cover') {
      setResizeModeState(FastImage.resizeMode.cover)
    }
    else if (resizeMode === 'contain') {
      setResizeModeState(FastImage.resizeMode.contain)
    }
    else if (resizeMode === 'stretch') {
      setResizeModeState(FastImage.resizeMode.stretch)
    }
  }, [resizeMode])

  return (
    <FastImage
      style={style}
      source={ (Number.isInteger(source)) ? source : {...source, priority: FastImage.priority.high}}
      resizeMode={resizeModeState}
      onProgress={() => setLoading(prev => true)}
      onError={() => {
        console.log("image load err - ", source);        
      }}
      onLoadEnd={() => {    
        setLoading(prev => false)  
      }}
      tintColor={tintColor}
    />
  )
}

export default CustomImage

const styles = StyleSheet.create({
  loader:{
    justifyContent:'center', 
    backgroundColor: colors.sky1
  },
  loading:{
    fontFamily: fontFamily.regular,
    fontSize: normalize(12),
    color: colors.white,
    textAlign:'center'
  }
})
