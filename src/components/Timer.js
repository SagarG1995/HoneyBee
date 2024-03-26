import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { fontFamily, fontSize } from '../utils/variables'
import { normalize } from '../utils/normalize'
import { colors } from '../utils/colors'

const Timer = ({
    onTimerStop,
    // shouldStartTimer = false
}) => {

    const [duration, setDuration] = useState(1 * 20)
    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)


    const interval = useRef()

    useEffect(() => {
        startTimer()

        return () => clearInterval(interval.current)
    }, [second, minute, duration])

    const startTimer = () => {

        let timer = duration

        interval.current = setInterval(() => {

            const min = parseInt(timer / 60, 10)
            const sec = parseInt(timer % 60, 10)

            console.log(timer, min, sec);

            setMinute(min)
            setSecond(sec)

            if (--timer < 0) {
                timer = duration
                setDuration(timer)
                stopTimer()
            } else {
                setDuration(prev => --prev)
            }

        }, 1000);
    }

    const stopTimer = () => {

        clearInterval(interval.current)
        setMinute(0)
        setSecond(0)
        setDuration(1 * 20)
        onTimerStop()
        // startTimer()
    }



    return (
        <View style={styles.container}>

            <View style={styles.timer}>
                <Text style={styles.time}>0{hour}</Text>
                <Text style={styles.dot}>:</Text>
                <Text style={styles.time}>
                    {
                        minute.toString().length === 2 ?
                            minute
                            :
                            "0" + minute
                    }
                </Text>
                <Text style={styles.dot}>:</Text>
                <Text style={styles.time}>
                    {
                        second.toString().length === 2 ?
                            second
                            :
                            "0" + second
                    }
                </Text>
            </View>
            <View style={styles.timer}>
                <Text style={styles.timeformat}>HH</Text>
                <Text style={[styles.dot, styles.dotformat]}>:</Text>
                <Text style={styles.timeformat}>
                    MM
                </Text>
                <Text style={[styles.dot, styles.dotformat]}>:</Text>
                <Text style={styles.timeformat}>
                    SS
                </Text>
            </View>

        </View>
    )
}

export default React.memo(Timer)

const styles = StyleSheet.create({
    container: {

    },
    timer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    time: {
        fontFamily: fontFamily.bold,
        fontSize: fontSize.font15,
        color: colors.black
    },
    timeformat: {
        fontFamily: fontFamily.regular,
        fontSize: fontSize.font10,
        color: colors.grey3
    },
    dot: {
        fontFamily: fontFamily.regular,
        fontSize: fontSize.font15,
        color: colors.grey3,
        marginHorizontal: normalize(5)
    },
    dotformat: {
        fontSize: fontSize.font10,
    },
})