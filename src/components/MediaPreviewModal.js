import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { BlurView } from '@react-native-community/blur'
import { colors } from '../utils/colors'
import CustomImage from './CustomImage'
import { normalize } from '../utils/normalize'
import { staticShadow } from '../utils/variables'
import PostReactionButtonContainer from './PostReactionButtonContainer'

const MediaPreviewModal = ({
    media,
    onPressBackDrop
}) => {

    // console.log(media);

    return (
        <Modal
            animationType="fade"
            transparent={true}
            statusBarTranslucent
        >

            <View style={styles.container}>
                <BlurView
                    style={styles.blurView}
                    blurType="light"
                    blurAmount={4}
                    // reducedTransparencyFallbackColor="white"
                />

                <TouchableOpacity style={styles.backDrop} onPress={onPressBackDrop} />

                <View style={styles.content}>                    
                    {
                        media?.tag === 'image' &&
                        <CustomImage
                            source={{
                                uri: media.uri
                            }}
                            style={styles.image}
                            resizeMode="contain"
                        />
                    }

                    <PostReactionButtonContainer
                        containerStyle={{
                            marginTop: normalize(5),
                        }}
                    />

                </View>

                <TouchableOpacity style={styles.backDrop} onPress={onPressBackDrop} />

            </View>


        </Modal>
    )
}

export default React.memo(MediaPreviewModal)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    blurView: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    backDrop: {
        flex: 1,
    },
    content: {
        // flex: 0.5,
        height: normalize(350),
        backgroundColor: colors.white,
        paddingTop: normalize(8),
        marginHorizontal: normalize(10),
        borderRadius: normalize(8),
        ...staticShadow
    },
    image: {
        flex: 1,
        marginHorizontal: 5,
    }
})