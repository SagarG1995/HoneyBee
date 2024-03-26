import { View, Text, ListRenderItem, FlatList, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { normalize } from '../utils/normalize'
import { fontFamily, fontSize } from '../utils/variables'
import { colors } from '../utils/colors'



const CustomFlatlist = ({
    data=[],
    keyExtractor,
    renderItem,
    style,
    numColumns = 0,
    horizontal=false,
    showsHorizontalScrollIndicator=true,
    initialNumToRender = 10,
    contentContainerStyle,
    itemSeparatorComponent=undefined,
    listHeaderComponent=undefined,
    maxHeight = null,
    columnWrapperStyle=null
}) => {
    return (
        <View style={[styles.flatlistcontainer,{ maxHeight: maxHeight}]}>
            <FlatList
                data={data}
                // disableVirtualization
                keyExtractor={(item, index) => index + keyExtractor}
                renderItem={renderItem}
                contentContainerStyle={[styles.content, contentContainerStyle]}
                style={[styles.container, style]}
                ItemSeparatorComponent={itemSeparatorComponent}
                numColumns={numColumns}
                horizontal={horizontal}
                showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
                initialNumToRender={initialNumToRender}
                ListHeaderComponent={listHeaderComponent}
                ListEmptyComponent={()=> <Text style={styles.nodata}>No data</Text>}
                columnWrapperStyle={columnWrapperStyle}
               
            />
        </View>
    )
}

export default React.memo(CustomFlatlist)

const styles = StyleSheet.create({
    flatlistcontainer: {
        flex:1,
    },
    container: {
        // flex:1,
        marginTop: normalize(15),
    },
    content: {
        flexGrow: 1,
        paddingBottom: normalize(10)
    },
    nodata:{
        fontFamily: fontFamily.light,
        fontSize: fontSize.font12,
        color: colors.black,
        textAlign:'center',
        marginTop: normalize(10)
    }
})