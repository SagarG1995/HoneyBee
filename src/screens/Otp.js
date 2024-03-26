import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import { normalize } from '../utils/normalize'
import { fontFamily, fontSize, icons, images, lottie, statusbarHeight } from '../utils/variables'
import AppHeader from '../components/AppHeader'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LottieAnim from '../components/LottieAnim'
import OtpTextBox from '../components/OtpTextBox'
import CustomButton from '../components/CustomButton'
import TextButton from '../components/TextButton'
import { CommonActions, useNavigation } from '@react-navigation/native'

const Otp = () => {

  const navigation = useNavigation()

  return (
    <ImageBackground source={images.otpbg} style={styles.container} resizeMode='cover'>
      <View style={[styles.transparentBlack,{paddingTop: statusbarHeight}]}>
        <AppHeader
          showBackBtn
          staticShadow={false}
          iconColor={colors.white}
          containerStyle={{ backgroundColor: 'transparent' }}
        />
        <KeyboardAwareScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps='handled'>
          <LottieAnim
            source={lottie.otp}
            style={styles.lottieStyle}
          />
          <Text style={styles.heading}>Enter verification code</Text>
          <Text style={styles.subHeading}>We have sent OTP to your mobile number ******9201</Text>

          <OtpTextBox
            containerStyle={{
              marginTop: normalize(40)
            }}
          />

          <CustomButton
            label="Verify"
            containerStyle={{
              backgroundColor: colors.themeColor,
              marginTop: normalize(30),
            }}
            onPress={() => {
              navigation.navigate("home")
            }}
          />

          <View style={styles.btnContainer}>
            <Text style={styles.footerText}>Didn't receive the OTP?</Text>
            <TextButton title="RESEND OTP" />
          </View>

        </KeyboardAwareScrollView>
      </View>
    </ImageBackground>
  )
}

export default Otp


const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  transparentBlack:{
    flex:1,
    backgroundColor: colors.transparentBlack1,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: normalize(10),
  },
  lottieStyle: {
    width: normalize(100),
    height: normalize(100),
    alignSelf: 'center',
    marginTop: normalize(50)
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
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: normalize(15)
  },
  footerText: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.font10,
    marginRight: normalize(4),
    color: colors.white
  }
})