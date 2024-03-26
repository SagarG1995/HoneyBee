import { View, Text, StyleSheet, TouchableWithoutFeedback, Linking } from 'react-native'
import React, { FC } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { normalize } from '../utils/normalize'
import { colors } from '../utils/colors'
import { fontFamily, fontSize } from '../utils/variables'


const TermConditionText = ({
    containerStyle,
    textColor,
    btnTxtColor,
    iconColor=undefined
}) => {

    const onPressTerm = () => {
        Linking.openURL("https://thekidcity.in/terms-conditions")
    }

    const onPressPolicy = () => {
        Linking.openURL("https://thekidcity.in/privacy/")
    }

    return (
        <View style={[styles.container, containerStyle]}>
            <Feather name='check-circle' size={normalize(17)} color={iconColor ?? colors.themeColor} />
            <View style={styles.textContent}>
                <Text style={[styles.text1, textColor]} adjustsFontSizeToFit numberOfLines={2}>By Signing in to this account , you agree to our
                    <TouchableWithoutFeedback onPress={onPressTerm}>
                        <Text style={[styles.btnTxt, btnTxtColor]}> terms of service</Text>
                    </TouchableWithoutFeedback>
                    <Text > and</Text>
                    <TouchableWithoutFeedback onPress={onPressPolicy}>
                        <Text style={[styles.btnTxt, btnTxtColor]} > Privacy policy</Text>
                    </TouchableWithoutFeedback>
                </Text>
            </View>
        </View>
    )
}

export default React.memo(TermConditionText)

const styles = StyleSheet.create({
    container: {
        marginTop: normalize(20),
        flexDirection: 'row',
        alignItems: 'center',        
    },
    textContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: normalize(5)
    },
    text1: {
        color: colors.black,
        fontSize: fontSize.font9,
        fontFamily: fontFamily.regular,        
    },
    btnTxt: {
        color: colors.red,
        fontSize: fontSize.font9,
        fontFamily: fontFamily.bold
    }
})