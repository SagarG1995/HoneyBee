import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomImage from './CustomImage'
import { normalize } from '../utils/normalize'
import { colors } from '../utils/colors'
import { fontFamily, fontSize, staticShadow } from '../utils/variables'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import OnlineCircle from './OnlineCircle'
import PostReactionButtonContainer from './PostReactionButtonContainer'

const PostCard = ({
    onPressPostOption,
    goToProfile
}) => {
    return (
        <View style={styles.container}>

            <View style={styles.cardHeader}>
                <View style={styles.profileInfo}>
                    <TouchableOpacity onPress={goToProfile}>
                        <CustomImage source={{ uri: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" }} resizeMode="cover" style={styles.profileImage} />
                        <OnlineCircle containerStyle={styles.onlineCircle} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.name}>Sagar Ghosh</Text>
                        <Text style={styles.time}>1:10 pm</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.postMenuBtn} onPress={onPressPostOption}>
                    <Entypo name="dots-three-horizontal" size={normalize(15)} color={colors.black} />
                </TouchableOpacity>
            </View>

            <View style={styles.cardBody}>
                <CustomImage source={{ uri: "https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg" }} resizeMode="cover" style={styles.bodyImage} />
            </View>

            <PostReactionButtonContainer />
            
        </View>
    )
}

export default React.memo(PostCard)

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        ...staticShadow
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: normalize(10),
        paddingVertical: normalize(10),
    },
    profileInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileImage: {
        width: normalize(40),
        height: normalize(40),
        borderRadius: normalize(60)
    },
    onlineCircle: {
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    name: {
        fontFamily: fontFamily.bold,
        fontSize: fontSize.font11,
        color: colors.black,
        marginLeft: normalize(5),
        letterSpacing: 0.2
    },
    time: {
        fontFamily: fontFamily.light,
        fontSize: fontSize.font10,
        color: colors.black,
        marginLeft: normalize(6),
    },
    postMenuBtn: {
        justifyContent: 'center',
        paddingHorizontal: normalize(5)
    },
    cardBody: {

    },
    bodyImage: {
        width: '100%',
        height: normalize(250)
    },    
})