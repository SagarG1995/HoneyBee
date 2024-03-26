import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { fontFamily, fontSize } from '../utils/variables'
import { colors } from '../utils/colors'
import { normalize } from '../utils/normalize'
import AntDesign from 'react-native-vector-icons/AntDesign'

const PostReactionButtonContainer = ({
    containerStyle
}) => {


    return (
        <View style={[styles.container, containerStyle]}>
            <View style={styles.labelContainer}>
                <Text style={styles.label} numberOfLines={1}>1.2k react</Text>
                <Text style={styles.label} numberOfLines={1}>1.2k comments</Text>
            </View>

            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.iconBtn} activeOpacity={0.5}>
                    <AntDesign name="hearto" size={normalize(20)} color={colors.grey3} />
                    <Text style={styles.iconBtnTxt}>Like</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconBtn} activeOpacity={0.5}>
                    <AntDesign name="message1" size={normalize(20)} color={colors.grey3} />
                    <Text style={styles.iconBtnTxt}>Comment</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default React.memo(PostReactionButtonContainer)

const styles = StyleSheet.create({
    container: {

    },
    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: normalize(10)
    },
    btnContainer: {
        flexDirection: 'row'
    },
    label: {
        fontFamily: fontFamily.light,
        fontSize: fontSize.font9,
        color: colors.grey3,
        paddingVertical: normalize(3),
    },
    iconBtn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: normalize(8),
        paddingHorizontal: normalize(10),
        borderTopColor: colors.grey3,
        borderTopWidth: normalize(0.5)

    },
    iconBtnTxt: {
        fontFamily: fontFamily.light,
        fontSize: fontSize.font9,
        color: colors.grey3,
        marginLeft: normalize(5)
    }
})