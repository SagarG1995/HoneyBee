import { View, Text, Modal, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { normalize } from '../utils/normalize'
import { fontFamily, fontSize } from '../utils/variables'

const PostOptionsModal = ({
    onPressBackDrop,
    onPressOption
}) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
        >
            <View style={styles.container}>
                <TouchableOpacity style={styles.backDrop} activeOpacity={1} onPress={onPressBackDrop} />
                <View style={styles.content}>
                    <TouchableOpacity style={styles.optionBtn} onPress={onPressOption}>
                        <MaterialCommunityIcons name="message-alert" size={normalize(19)} color={colors.black} />
                        <Text style={styles.optionBtnText}>Report Post</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionBtn} onPress={onPressOption}>
                        <AntDesign name="profile" size={normalize(17)} color={colors.black} />
                        <Text style={styles.optionBtnText}>View Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default React.memo(PostOptionsModal)

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:  colors.transparentBlack2,
        justifyContent:'flex-end',
    },
    backDrop:{
        flex:1,
    },
    content:{
        backgroundColor: colors.white,
        paddingVertical: normalize(10),
        paddingHorizontal: normalize(10),
        borderTopEndRadius: normalize(10),
        borderTopStartRadius: normalize(10)
    },
    optionBtn:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical: normalize(5),
        marginTop: normalize(10)
    },
    optionBtnText:{
        fontFamily: fontFamily.bold,
        color: colors.black,
        fontSize: fontSize.font11,
        marginLeft: normalize(3),
        letterSpacing: 0.2,
        marginTop: 3
    }
})