import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useCallback, useState } from 'react'
import ProfileHeaderComponents from '../components/ProfileHeaderComponents'
import { normalize } from '../utils/normalize'
import { statusbarHeight } from '../utils/variables'
import AppHeader from '../components/AppHeader'
import { colors } from '../utils/colors'
import { profile_media } from '../data/profiledata'
import ProfileMediaContainer from '../components/ProfileMediaContainer'
import MediaPreviewModal from '../components/MediaPreviewModal'


const Profile = () => {

  const [media, setMedia] = useState(profile_media)
  const [selectedMedia, setSelectedMedia] = useState(null)
  const [showPreviewModal, setShowPreviewModal] = useState(false)

  const onPressMedia = useCallback((data) => {
    console.log(data);
    setSelectedMedia(data)
    setShowPreviewModal(true)

  }, [selectedMedia, showPreviewModal, media])


  return (
    <View style={styles.container}>

      <AppHeader
        containerStyle={styles.headerContainerStyle}
        showShadow
        showBackBtn
        iconColor={colors.black}
      />

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

        <ProfileHeaderComponents />


        <ProfileMediaContainer
          media={media}
          onPressMedia={onPressMedia}
        />


      </ScrollView>

      {
        showPreviewModal &&
        <MediaPreviewModal
          media={selectedMedia}
          onPressBackDrop={ () => setShowPreviewModal(false)}
        />
      }

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // backgroundColor: 'red',
  },
  headerContainerStyle: {
    position: 'absolute',
    top: statusbarHeight + normalize(10),
    left: 10,
    zIndex: 9,
    backgroundColor: colors.transparentWhite1,
    borderRadius: normalize(50),
    height: normalize(40),
    width: normalize(40)
  },
})



{/* <ResponsiveGrid
          maxItemsPerColumn={2}
          data={media}
          renderItem={renderItem}
          itemUnitHeight={180} // set itemUnitHeight to control uneven tiles
          style={{
            marginTop: normalize(5),            
          }}
          showScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}                   
        /> */}
