import { View, Text, StyleSheet } from 'react-native'
import React, { useCallback, useState } from 'react'
import AppHeader from '../components/AppHeader'
import CustomFlatlist from '../components/CustomFlatlist'
import PostCard from '../components/PostCard'
import { normalize } from '../utils/normalize'
import { colors } from '../utils/colors'
import PostReportModal from '../components/PostReportModal'
import PostOptionsModal from '../components/PostOptionsModal'
import DailySuggestionButton from '../components/DailySuggestionButton'
import { daiy_matchs } from '../data/dailymatch'
import { useNavigation } from '@react-navigation/native'
import { statusbarHeight } from '../utils/variables'

const post = [{}, {}]

const Home = () => {

    const navigation = useNavigation()
    const [showPostOptionModal, setPostOptionModal] = useState(false)

    
    const goToProfile = (item) => {
        navigation.navigate("profile")
    }

    const renderPostItem = ({ item, index }) => {
        return (
            <PostCard
                onPressPostOption={() => setPostOptionModal(true)}
                goToProfile={() => goToProfile(item)}
            />
        )
    }

    const listHeaderComponent = useCallback(() => {
        return(
            <DailySuggestionButton data={daiy_matchs} />
        )
    },[])

    return (
        <View style={styles.container}>
            <AppHeader
                title="HoneyBee"
                showSearch
                showShadow={false}
                containerStyle={{
                    marginTop: statusbarHeight,
                }}
            />
            <CustomFlatlist
                data={post}
                keyExtractor={"_posts"}
                renderItem={renderPostItem}
                style={styles.listStyle}
                // listHeaderComponent={listHeaderComponent}
                itemSeparatorComponent={() => <View style={styles.separator} />}
            />

            {/* <PostReportModal /> */}
            {
                showPostOptionModal &&
                <PostOptionsModal
                    onPressBackDrop={() => setPostOptionModal(false)}
                />
            }
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    listStyle: {
        marginTop: 0,
        backgroundColor: colors.grey1,
    },
    separator: {
        marginTop: normalize(10)
    }
})