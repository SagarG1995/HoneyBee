import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import CustomFlatlist from './CustomFlatlist'
import CustomImage from './CustomImage'
import { normalize } from '../utils/normalize'
import { staticShadow } from '../utils/variables'
import ProfileTabMenu from './ProfileTabMenu'

const ProfileMediaContainer = ({
    media,
    onPressMedia
}) => {

    useEffect(() => {
        // console.log('media container loaded', media);
    },[])


    const onActiveTab = useCallback((index) => {

    }, [])

    const RenderItem = ({ item, index }) => {
        
        if (item.tag === 'image') {
            return (
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={[
                        styles.gridView,
                        ((media.length === index + 1) && (media.length % 2 !== 0)) && styles.fullViewGridItem
                    ]}
                    onPress={()=> onPressMedia(item)}
                >
                    <Image
                        source={{
                            uri: item.uri,                            
                        }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </TouchableOpacity>
            )

        }

    }


    return (
        <View style={styles.container}>

            <ProfileTabMenu
                onActiveTab={onActiveTab}
            />

            <View style={styles.gridContainer}>
                {
                    media.map((item, index) =>
                        <RenderItem item={item} index={index} key={index} />
                    )
                }
            </View>
        </View>
    )
}

export default (ProfileMediaContainer)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: normalize(5),
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridView: {
        width: '46.9%',
        height: normalize(200),
        marginBottom: normalize(10),
        borderRadius: normalize(8),
        overflow: 'hidden',
        ...staticShadow,
        backgroundColor: 'red'
    },
    fullViewGridItem: {
        width: '97%',
        backgroundColor: 'red'
    },
    image: {
        // flex: 1,
        width:'100%',
        height: '100%'
    },
})