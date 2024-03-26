import { Dimensions, Platform, StatusBar } from "react-native"
import { normalize } from "./normalize"


export const DEVICE_HEIGHT = Dimensions.get("screen").height
export const DEVICE_WIDTH = Dimensions.get("screen").width


export const images = {
    onboard: require("../assets/images/onboard.png"),
    loginbg: require("../assets/images/loginbg.png"),
    otpbg:  require("../assets/images/otpbg.png"),
    signup: require("../assets/images/signupbg.png")
}

export const icons = {
    otp: require("../assets/icons/otp.png"),
    girl1: require("../assets/icons/girl1.png"),
    girl2: require("../assets/icons/girl2.png"),
    girl3: require("../assets/icons/girl3.png"),
    paid: require("../assets/icons/paid.png"),
    free: require("../assets/icons/free.png"),
}

export const fontFamily = {
    bold: "Poppins-Bold",
    boldItalic: "Poppins-BoldItalic",
    italic: "Poppins-Italic",
    light: "Poppins-Light",
    lightItalic: "Poppins-LightItalic",
    regular: "Poppins-Regular"
}

export const fontSize = {
    font9: normalize(9),
    font10: normalize(10),
    font11: normalize(11),
    font12: normalize(12),
    font13: normalize(13),
    font14: normalize(14),
    font15: normalize(15),
    font16: normalize(16),
    font20: normalize(20),
    font25: normalize(25),
}

export const lottie = {
    otp: require("../assets/lottie/otp.json")
}

export const staticShadow = {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 8
}


export const statusbarHeight = StatusBar.currentHeight

export const is_android = Platform.OS === 'android'
export const is_ios = Platform.OS === 'ios'