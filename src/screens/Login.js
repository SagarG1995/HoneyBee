import { View, Text, ImageBackground, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import { normalize } from '../utils/normalize'
import { fontFamily, fontSize, images } from '../utils/variables'
import CustomTextInput from '../components/CustomTextInput'
import AppHeader from '../components/AppHeader'
import Feather from 'react-native-vector-icons/Feather'
import AuthButton from '../components/AuthButton'
import TermConditionText from '../components/TermConditionText'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native'


const Login = () => {

  const navigation = useNavigation()


  return (
    <ImageBackground source={images.loginbg} style={styles.container} resizeMode='cover'>
      <View style={styles.content}>
        <AppHeader
          showBackBtn
          containerStyle={{ backgroundColor: 'transparent' }}
          iconColor={colors.white}
        />

        <Text style={styles.heading}>Welcome</Text>

        <KeyboardAwareScrollView
          enableOnAndroid
          enableAutomaticScroll={(Platform.OS === 'ios')}
          extraHeight={130} 
          extraScrollHeight={130}
          contentContainerStyle={styles.body}
        >

          <CustomTextInput
            leftIcon={<Feather name="phone" size={normalize(15)} color={colors.white} />}
            containerStyle={{
              marginHorizontal: normalize(10),
            }}
            placeholder="Enter phone numner"
            placeholderTextColor={colors.grey}
          />

          <AuthButton
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
    </ImageBackground>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    backgroundColor: colors.transparentBlack,
  },
  body: {
    flexGrow: 1,
    paddingHorizontal: normalize(10),
    justifyContent: 'center',
  },
  heading: {
    fontSize: fontSize.font25,
    color: colors.white,
    fontFamily: fontFamily.boldItalic,
    textAlign: 'center'
  },
})