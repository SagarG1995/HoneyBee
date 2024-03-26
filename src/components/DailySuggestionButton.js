import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useCallback, useState } from 'react'
import { normalize } from '../utils/normalize'
import ProfileFeedCard from './ProfileFeedCard'
import { fontFamily, fontSize, icons } from '../utils/variables'
import { colors } from '../utils/colors'
import Timer from './Timer'
import CustomImage from './CustomImage'

const DailySuggestionButton = ({
    data
}) => {

    const [isShowingMatches, setIsShowingMatches] = useState(false)

    const onTimerStop = useCallback(() => {
        setIsShowingMatches(!isShowingMatches)
    },[isShowingMatches])

    return (
        <View style={styles.container}>

            <Text style={styles.heading}>Your daily matches</Text>
            {
                isShowingMatches &&
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardContainerStyle}>
                    {
                        data.map((item, index) =>
                            <ProfileFeedCard
                                key={index + "_feedcard"}
                                data={item}
                                containerStyle={(data.length - 1 === index) ? { marginRight: 0 } : null}
                            />
                        )
                    }
                </ScrollView>
            }

            {
                !isShowingMatches &&
                <View style={styles.girlsVectorIcons}>
                    <CustomImage source={icons.girl1} style={styles.girlIcon} resizeMode="cover" />
                    <CustomImage source={icons.girl2} style={styles.girlIcon} resizeMode="cover" />
                    <CustomImage source={icons.girl3} style={styles.girlIcon} resizeMode="cover" />
                </View>
            }

            <Timer
                onTimerStop={onTimerStop}
                // shouldStartTimer={!isShowingMatches}
            />

            <Text style={styles.label}>Your {!isShowingMatches && "next"} matches {isShowingMatches ? "will ends" : "will start"} in</Text>

        </View>
    )
}

export default React.memo(DailySuggestionButton)

const styles = StyleSheet.create({
    container: {
        paddingVertical: normalize(10),
        backgroundColor: colors.white,
        marginVertical: normalize(10)
    },
    heading: {
        fontFamily: fontFamily.bold,
        fontSize: fontSize.font13,
        color: colors.grey3,
        textAlign: 'center'
    },
    cardContainerStyle: {
        paddingHorizontal: normalize(10),
        paddingVertical: normalize(10)
    },
    label: {
        fontFamily: fontFamily.regular,
        fontSize: fontSize.font11,
        color: colors.black,
        textAlign: 'center'
    },
    girlsVectorIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: normalize(5)
    },
    girlIcon: {
        width: normalize(50),
        height: normalize(50),
        borderRadius: normalize(50)
    }
})