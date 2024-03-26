import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { normalize } from '../utils/normalize'
import CustomImage from './CustomImage'
import { colors } from '../utils/colors'
import {staticShadow} from '../utils/variables'

const CircleImage = ({
    containerStyle,
    showBorder=true
}) => {


    return (
        <View style={[styles.container, containerStyle, showBorder && styles.border]}>
            <CustomImage
                source={{uri: 'https://s3.ap-south-1.amazonaws.com/modelfactory.in/upload/2023/Feb/18/blog_images/43b6b34c9d64d40ba7fb7be86d6f35fb.jpg'}}
                style={styles.image}
                resizeMode='cover'
            />
        </View>
    )
}

export default React.memo(CircleImage)

const styles = StyleSheet.create({
    container: {
        width: normalize(100),
        height: normalize(100),
        borderRadius: normalize(100),
        overflow:'hidden',
    },
    image:{
        width: '100%',
        height: '100%',
    },
    border:{
        borderColor: colors.white,
        borderWidth: normalize(3),
        ...staticShadow
    }
})