import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import AppHeader from './AppHeader'
import { fontFamily, fontSize, icons, statusbarHeight } from '../utils/variables'
import { colors } from '../utils/colors'
import { normalize } from '../utils/normalize'
import CustomButton from './CustomButton'
import OnlineCircle from './OnlineCircle'
import CustomImage from './CustomImage'
import CircleImage from './CircleImage'
import LinearGradient from 'react-native-linear-gradient'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import ProfileTabMenu from './ProfileTabMenu'

const ProfileHeaderComponents = ({
  
}) => {


  return (
    <View style={styles.container}>

      <ImageBackground source={{ uri: 'https://s3.ap-south-1.amazonaws.com/modelfactory.in/upload/2023/Feb/18/blog_images/43b6b34c9d64d40ba7fb7be86d6f35fb.jpg' }} style={styles.coverPhoto} resizeMode='cover' >
        <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(255,255,255,0.9)']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={styles.gradient}>


        </LinearGradient>
      </ImageBackground>

      <CircleImage
        containerStyle={{
          alignSelf: 'center',
          marginTop: -normalize(50),
        }}
      />

      <View style={styles.memberVersion}>
        <Text style={styles.profileName} numberOfLines={1}>Kristin Watson</Text>
        <CustomImage source={icons.free} style={styles.membershipIcon} resizeMode='contain' />
      </View>

      <View style={styles.visibility}>
        <OnlineCircle />
        <Text style={styles.visibilityStatus}> Online </Text>
      </View>

      <View style={styles.bioView}>
        <Text style={styles.bio} numberOfLines={3}>
          🌟 Sarah Johnson
          📍 Los Angeles, CA
          📚 Lifelong Learner | 🖋️ Writer Wannabe | 🎨 Creative Soul
          🌱 Exploring the world one book at a time
          📝 Sharing thoughts and ideas about literature
        </Text>
      </View>

      <View style={styles.socialBtnContainer}>
        <CustomButton
          label="Message"
          containerStyle={[styles.socialBtn, { flex: 0.8 }]}
          btnTextStyle={styles.socialBtnText}
        // onPress={() => navigation.navigate("otp")}
        />
        <CustomButton
          middleIcon={<EvilIcons name="share-google" size={normalize(20)} color={colors.black} />}
          containerStyle={[styles.socialBtn, { paddingHorizontal: normalize(30) }]}
        // onPress={() => navigation.navigate("otp")}
        />
      </View>

      

    </View>
  )
}

export default React.memo(ProfileHeaderComponents)


const styles = StyleSheet.create({
  container: {
  
  },
  coverPhoto: {
    height: normalize(250),
  },
  gradient: {
    flex: 1
  },
  memberVersion: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: normalize(10)
  },
  profileName: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.font15,
    color: colors.black,
    textAlign: 'center',
  },
  membershipIcon: {
    width: normalize(18),
    height: normalize(18),
    marginLeft: normalize(8)
  },
  visibility: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  visibilityStatus: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.font10,
    color: colors.grey3,
    marginTop: 2.5,
    marginLeft: normalize(3)
  },
  bioView: {
    marginTop: normalize(5),
    marginHorizontal: normalize(20)
  },
  bio: {
    textAlign: 'justify',
    fontFamily: fontFamily.regular,
    fontSize: fontSize.font9,
    color: colors.black,
    letterSpacing: 0.3
  },
  socialBtnContainer: {
    flexDirection: 'row',
    marginTop: normalize(15),
    justifyContent: 'space-evenly'
  },
  socialBtn: {
    backgroundColor: colors.grey2,
  },
  socialBtnText: {
    fontSize: fontSize.font12,
    color: colors.black,
    fontFamily: fontFamily.bold
  }
})