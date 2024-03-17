import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { normalize } from '../utils/normalize'
import { colors } from '../utils/colors'
import { fontFamily, fontSize, staticShadow } from '../utils/variables'
import { useNavigation } from '@react-navigation/native'

const AppHeader = ({
    label= "Click",
    containerStyle= null,
    showBackBtn= false,
    title= "",
    iconColor= "",
    showShadow=true
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
                <Text style={styles.heading}>{title}</Text>
            }
        </View>
    )
}

export default React.memo(AppHeader)

const styles = StyleSheet.create({
    container:{
        height: normalize(45),
        backgroundColor: colors.white,
        flexDirection:'row',
        zIndex: 1,
    },
    backBtn:{        
        width: normalize(40),
        height: '100%',
        justifyContent:'center',
        alignItems:'center'
    },
    heading:{
        fontFamily: fontFamily.italic,
        fontSize: fontSize.font15,
        alignSelf:'center',
        marginLeft: normalize(15),
        marginTop: 6,
        color: colors.black   
    }
})