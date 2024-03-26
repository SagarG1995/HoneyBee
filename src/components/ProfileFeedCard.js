import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { normalize } from '../utils/normalize'
import { DEVICE_WIDTH, fontFamily, fontSize } from '../utils/variables'
import { colors } from '../utils/colors'
import CustomImage from './CustomImage'
import {staticShadow} from '../utils/variables'

const ProfileFeedCard = ({
    data,
    containerStyle
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <CustomImage
        source={{
            uri: data.image
        }}
        style={styles.feedImage}
        resizeMode="cover"
      />
      <View style={styles.overlay}/>
      <Text style={styles.name} numberOfLines={1}>{data.name}</Text>
    </View>
  )
}

export default React.memo(ProfileFeedCard)

const styles = StyleSheet.create({
    container:{
        width: DEVICE_WIDTH / 3,
        height: normalize(150),
        backgroundColor: colors.grey1,
        marginRight: normalize(10),
        borderRadius: normalize(10),
        borderColor: colors.neonBlue,
        overflow:'hidden',
        ...staticShadow
    },
    feedImage:{
        width: '100%',
        height: '100%'
    },
    overlay:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: colors.transparentBlack1
    },
    name:{
        position: 'absolute',
        bottom: 10,
        paddingHorizontal: normalize(5),
        fontFamily: fontFamily.regular,
        fontSize: fontSize.font9,
        color: colors.white,
        letterSpacing: 0.2,
        textTransform:'capitalize'
    }
})