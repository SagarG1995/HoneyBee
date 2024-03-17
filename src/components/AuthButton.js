import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { PureComponent } from 'react'
import { normalize } from '../utils/normalize'
import { fontFamily, fontSize } from '../utils/variables'
import { colors } from '../utils/colors'


const AuthButton = ({
    containerStyle,
    btnTextStyle,
    label,
    onPress
}) => {
    return (
        <TouchableOpacity style={[styles.container,containerStyle]} onPress={onPress}>
            <Text style={[styles.btnText, btnTextStyle]}>
                {
                   label
                }
            </Text>
        </TouchableOpacity>
    )
}

export default React.memo(AuthButton)

const styles = StyleSheet.create({
    container: {
        height: normalize(40),
        justifyContent: 'center',
        backgroundColor: colors.themeColor,
        borderRadius: normalize(50)
    },
    btnText: {
        fontSize: fontSize.font14,
        color: colors.white,
        fontFamily: fontFamily.regular,
        textAlign: 'center',
        textTransform: 'capitalize',
        letterSpacing: 0.8
    }
})