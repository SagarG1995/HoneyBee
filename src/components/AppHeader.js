import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { normalize } from '../utils/normalize'
import { colors } from '../utils/colors'
import { fontFamily, fontSize, staticShadow } from '../utils/variables'
import { useNavigation } from '@react-navigation/native'


const AppHeader = ({
    label = "Click",
    containerStyle = null,
    headingStyle,
    showBackBtn = false,
    title = "",
    iconColor = undefined,
    showShadow = true,
    showSearch = false
}) => {

    const navigation = useNavigation()

    return (
        <View style={[styles.container, containerStyle, showShadow && staticShadow]}>
            {
                showBackBtn &&
                <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={normalize(20)} color={iconColor ?? colors.black} />
                </TouchableOpacity>
            }
            {
                title &&
                <Text style={[styles.heading, headingStyle]}>{title}</Text>
            }
            {
                showSearch &&
                <TouchableOpacity style={styles.btn}>
                    <AntDesign name="search1" size={normalize(15)} color={colors.black} />
                </TouchableOpacity>
            }
        </View>
    )
}

export default React.memo(AppHeader)

const styles = StyleSheet.create({
    container: {
        height: normalize(45),
        backgroundColor: colors.white,
        flexDirection: 'row',
        zIndex: 1,
        justifyContent:'space-between',
        alignItems:'center'
    },
    backBtn: {
        width: normalize(40),
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontFamily: fontFamily.italic,
        fontSize: fontSize.font15,
        alignSelf: 'center',
        marginLeft: normalize(15),
        marginTop: 3,
        color: colors.black
    },
    btn:{
        width: normalize(40),
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})