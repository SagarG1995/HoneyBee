import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import { normalize } from '../utils/normalize'
import { fontFamily, fontSize, images, is_ios, statusbarHeight } from '../utils/variables'
import CustomTextInput from '../components/CustomTextInput'
import AppHeader from '../components/AppHeader'
import Feather from 'react-native-vector-icons/Feather'
import CustomButton from '../components/CustomButton'
import TermConditionText from '../components/TermConditionText'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native'


const Login = () => {

  const navigation = useNavigation()

  return (
    <ImageBackground source={images.loginbg} style={styles.container} resizeMode='cover'>
      <View style={[styles.transparentBlack,{paddingTop: statusbarHeight}]}>
        <AppHeader
          showBackBtn
          containerStyle={{ backgroundColor: 'transparent' }}
          iconColor={colors.white}
        />
        <View style={styles.content}>

          <Text style={styles.heading}>Welcome</Text>

          <KeyboardAwareScrollView
            enableOnAndroid
            enableAutomaticScroll={(is_ios)}
            extraHeight={130}
            extraScrollHeight={130}
            contentContainerStyle={styles.body}
          >

            <CustomTextInput
              leftIcon={<Feather name="phone" size={normalize(15)} color={colors.white} />}
              containerStyle={{
                marginHorizontal: normalize(10),
              }}
              inputStyle={{
                color: colors.white
              }}
              placeholder="Enter phone number"
              placeholderTextColor={colors.grey2}
              keyboardType='number-pad'
              maxLength={10}
            />

            <CustomButton
              label="Login"
              containerStyle={{
                marginTop: normalize(30),
              }}
              btnTextStyle={{
                fontSize: fontSize.font12
              }}
              onPress={() => navigation.navigate("otp")}
            />

            <TermConditionText
              textColor={{
                color: colors.white
              }}
              containerStyle={{
                marginTop: normalize(10)
              }}
              btnTxtColor={{
                color: colors.neonBlue
              }}
            />
          </KeyboardAwareScrollView>
        </View>
      </View>
    </ImageBackground>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  transparentBlack: {
    flex: 1,
    backgroundColor: colors.transparentBlack1,
  },
  content: {
    flex: 1,
  },
  body: {
    flexGrow: 1,
    paddingHorizontal: normalize(10),
    paddingTop: normalize(180)
  },
  heading: {
    fontSize: fontSize.font25,
    color: colors.white,
    fontFamily: fontFamily.boldItalic,
    textAlign: 'center'
  },
})