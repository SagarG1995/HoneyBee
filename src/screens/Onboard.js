import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { fontFamily, fontSize, images } from '../utils/variables'

import { colors } from '../utils/colors'
import { normalize } from '../utils/normalize'
import LinearGradient from 'react-native-linear-gradient'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'


const Onboard = () => {

  const navigation = useNavigation()

  return (
    <ImageBackground source={images.onboard} style={styles.container} resizeMode='cover'>
      <View style={styles.content}>
        <Text style={styles.heading}>HoneyBee</Text>

        <View style={styles.footer}>
          <LinearGradient colors={['rgba(255,255,255,0)', colors.black]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={styles.introView}>
            <Text style={styles.introText}> discover a world of exciting connections waiting for you! Whether you're searching for love, companionship, or simply a great conversation, LoveConnect is here to make your dating journey unforgettable.</Text>

            <CustomButton
              label="Hook In"
              containerStyle={{
                marginTop: normalize(10),
              }}
              onPress={() => navigation.navigate("login") }              
            />
            <CustomButton
              label="Hook Up"
              containerStyle={{
                backgroundColor: colors.neonBlue,
                marginTop: normalize(15),
              }}
              onPress={() => navigation.navigate("signup") }  
            />
            <Text style={[styles.heading, styles.footerHeading]}>🌟 Find Your Perfect Match 🌟</Text>
          </LinearGradient>

        </View>

      </View>
    </ImageBackground>
  )
}

export default Onboard

const styles = StyleSheet.create({
  container:{
      flex:1
  },
  content:{
      flex:1,
      backgroundColor: colors.transparentBlack1,
      paddingTop: normalize(15)
  },
  heading:{
      fontSize: fontSize.font25,
      color: colors.white,
      fontFamily: fontFamily.boldItalic,
      textAlign:'center',
      marginTop: normalize(25)
  },
  footer:{
      marginTop:'auto',        
  },
  introView:{
      paddingTop: normalize(80),        
      paddingHorizontal: normalize(10),
      paddingBottom: normalize(15)
  },
  introText:{
      fontSize: fontSize.font12,
      color: colors.white,
      fontFamily: fontFamily.lightItalic,
      textAlign:'center',
      textTransform:'capitalize',        
  },
  footerHeading:{
      fontSize: fontSize.font15,
      marginTop: normalize(10)
  }
})