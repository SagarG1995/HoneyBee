import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomImage from './CustomImage';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '../utils/colors';
import { normalize } from '../utils/normalize';
import { fontFamily } from '../utils/variables';

const CustomDrawerMenu = (props) => {
      return (
        <View style={styles.container}>
            {/* <View style={styles.header}>
                <CustomImage
                    source={images.blacklogo}
                    style={styles.logo}
                    resizeMode='contain'
                />
                <Text style={styles.shopName} numberOfLines={2}>The Kidcity</Text>
                <Text style={styles.userName} numberOfLines={2}>Sagar Ghosh</Text>

                <Text style={styles.address}>15, Canal E Rd, near Maruti Garage, Kath Gola, khaldhar, Kolkata, West Bengal 700067</Text>

            </View>
            <View style={styles.menuContent}>

                <TouchableOpacity style={styles.menuItem} onPress={() => props.navigation.navigate("home")}>
                    <Ionicons name='home' size={normalize(18)} color={colors.white} />
                    <Text style={styles.menuText}>Dashboard</Text>
                </TouchableOpacity>

                

            </View>

            <View style={styles.versionContainer}>
                <Text style={styles.version}>App Veriosn: 1.0.2</Text>
            </View> */}
        </View>
    )
}

export default CustomDrawerMenu

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: colors.white,
        marginHorizontal: normalize(8),        
    },
    header: {
        backgroundColor: colors.black,
        alignItems: 'center',
        paddingVertical: normalize(10),
        paddingHorizontal: normalize(9),
        marginVertical: normalize(8),
        borderRadius: normalize(8),
    },
    logo: {
        height: normalize(90),
        width: normalize(90),
        borderRadius: normalize(80),
        borderColor: colors.white,
        borderWidth: normalize(2),
        backgroundColor: colors.white,
    },
    shopName: {
        flexShrink: 1,
        fontFamily: fontFamily.bold,
        fontSize: normalize(18),
        color: colors.white,
        marginTop: normalize(8)
    },
    userName: {
        flexShrink: 1,
        fontFamily: fontFamily.semiBold,
        fontSize: normalize(13),
        color: colors.white,
        marginTop: normalize(5)
    },
    address:{
        flexShrink: 1,
        fontFamily: fontFamily.medium,
        fontSize: normalize(12),
        color: colors.white,
        marginTop: normalize(5),
        textAlign:'center',
    },
    menuContent:{
        marginTop: normalize(5),
        paddingHorizontal: normalize(10),
        backgroundColor: colors.sky1,
        borderRadius: normalize(8),
    },
    menuItem:{
        flexDirection: 'row',
        paddingVertical: normalize(20),
        alignItems:'center',
        paddingHorizontal: normalize(8),
        borderBottomColor: colors.white,
        borderBottomWidth: normalize(2)
    },
    menuText:{
        flexShrink: 1,
        fontFamily: fontFamily.medium,
        fontSize: normalize(13),
        color: colors.white,
        textAlign:'center',
        marginTop: 4,
        marginLeft: normalize(8),
        textTransform:'capitalize'
    },
    versionContainer:{
        marginTop: 'auto',
        paddingVertical: normalize(10),
        alignItems:'flex-end'
    },
    version:{
        flexShrink: 1,
        fontFamily: fontFamily.light,
        fontSize: normalize(13),
        color: colors.black,
        textAlign:'center',
    }
})