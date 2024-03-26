import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { normalize } from '../utils/normalize'
import { DEVICE_WIDTH, fontFamily, fontSize } from '../utils/variables'
import { colors } from '../utils/colors'

const ProfileTabMenu = ({
    onActiveTab
}) => {

    const [activeBtn, setActiveBtn] = useState(0)

    const setActive = (index) => {
        setActiveBtn(index)
        if(onActiveTab){
            onActiveTab(index)
        }
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity style={[styles.tabBtn, activeBtn === 0 && styles.activeBtn]} onPress={() => setActive(0)}>
                <Text style={[styles.tabBtnText, activeBtn === 0 && styles.activeBtnText]}>All</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.tabBtn, activeBtn === 1 && styles.activeBtn]} onPress={() => setActive(1)}>
                <Text style={[styles.tabBtnText, activeBtn === 1 && styles.activeBtnText]}>Photos</Text>

                <View style={styles.countView}>
                    <Text style={styles.count}>10</Text>
                </View>

            </TouchableOpacity>

            <TouchableOpacity style={[styles.tabBtn, activeBtn === 2 && styles.activeBtn]} onPress={() => setActive(2)}>
                <Text style={[styles.tabBtnText, activeBtn === 2 && styles.activeBtnText]}>Videos</Text>

                <View style={styles.countView}>
                    <Text style={styles.count}>99+</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default React.memo(ProfileTabMenu)

const styles = StyleSheet.create({
    container: {
        marginVertical: normalize(15),
        // marginBottom: normalize(15),
        marginHorizontal: normalize(10),
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },
    tabBtn: {
        width: (DEVICE_WIDTH / 3) - normalize(20),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingVertical: normalize(4),
    },
    activeBtn: {
        backgroundColor: colors.grey2,
        borderRadius: normalize(20),

    },
    tabBtnText: {
        fontFamily: fontFamily.regular,
        color: colors.grey3,
        fontSize: fontSize.font9,
        marginTop: 2,
        textTransform: 'uppercase'
    },
    activeBtnText: {
        fontFamily: fontFamily.bold,
        color: colors.black
    },
    countView: {
        backgroundColor: colors.grey3,
        paddingHorizontal: normalize(8),
        borderRadius: normalize(20),
        marginLeft: normalize(4),
        // paddingVertical: normalize(1)
    },
    count: {
        color: colors.white,
        fontFamily: fontFamily.bold,
        fontSize: fontSize.font10,
        marginTop: 2   
    }
})
