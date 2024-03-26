import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { normalize } from '../utils/normalize'
import { colors } from '../utils/colors'
import { fontFamily, fontSize } from '../utils/variables'

const total_input = Array(4).fill(0)

const OtpTextBox = ({
    containerStyle
}) => {

    let textRef = []
    const [otp, setOtp] = useState([])

    const focusNext = (value, index) => {        
        if (index < textRef.length - 1 && value) {
            textRef[index + 1].focus()
        }
        if (index === textRef.length - 1 && value) {
            textRef[index].blur()
        }
        let myotp = otp
        myotp[index] = value
        setOtp(prev => myotp)
    }

    const focusPrev = (key, index) => {
        if (key === 'Backspace' && index != 0) {
            textRef[index - 1].focus()
        }
    }

  
    return (
        <View style={[styles.container, containerStyle]}>           
            {
                total_input.map((x, i) =>
                    <View style={styles.inputContainer} key={i}>
                        
                        <TextInput
                            ref={ref => textRef[i] = ref}
                            style={[styles.inputStyle]}
                            placeholder='0'
                            placeholderTextColor={colors.grey2}
                            maxLength={1}
                            autoFocus={(i == 0) ? true : false}
                            keyboardType='number-pad'
                            onChangeText={e => focusNext(e, i)}
                            onKeyPress={e => focusPrev(e.nativeEvent.key, i)}
                            textAlign='center'
                        />
                    </View>
                )}

        </View>
    )
}

export default React.memo(OtpTextBox)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    inputContainer: {
        flex: 0.2,
        height: normalize(40),
        borderColor: colors.white,
        borderWidth: normalize(2),
        borderRadius: normalize(10),        
        overflow:'hidden',
    },
    filledTextBox:{
        backgroundColor: colors.neonBlue,
    },
    inputStyle: {    
        flex:1,   
        color: colors.white,
        fontFamily: fontFamily.regular,
        fontSize: fontSize.font12,
        margin: 0,
        padding: 0,
        paddingTop: 5
    }
})