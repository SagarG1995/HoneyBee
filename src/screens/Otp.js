import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import { normalize } from '../utils/normalize'
import { fontFamily, fontSize, icons, lottie, staticShadow } from '../utils/variables'
import AppHeader from '../components/AppHeader'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LinearGradient from 'react-native-linear-gradient'
import LottieAnim from '../components/LottieAnim'

const Otp = () => {

  return (
    <LinearGradient colors={[colors.white, colors.neonBlue]} start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }} style={styles.container}>
      <AppHeader
        showBackBtn
        staticShadow={false}
        iconColor={colors.white}
        containerStyle={{ backgroundColor: 'transparent' }}
      />
      <KeyboardAwareScrollView contentContainerStyle={styles.content}>

        <LottieAnim
          source={lottie.otp}
          style={styles.lottieStyle}
        />        

        <Text style={styles.heading}>Enter verification code</Text>
        <Text style={styles.subHeading}>We have sent OTP to your mobile number ******9201</Text>

      </KeyboardAwareScrollView>
    </LinearGradient>
  )
}

export default Otp


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: normalize(10)
  },
  lottieStyle:{
    width: normalize(100),
    height: normalize(100),
    alignSelf:'center'
  },
  line: {
    height: normalize(1),
    backgroundColor: colors.white
  },
  heading: {
    fontSize: fontSize.font16,
    color: colors.white,
    fontFamily: fontFamily.bold,
    textAlign: 'center',
    marginTop: normalize(15)
  },
  subHeading: {
    fontSize: fontSize.font11,
    color: colors.white,
    fontFamily: fontFamily.regular,
    textAlign: 'center',
  },
})