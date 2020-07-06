import React from 'react'
import {Image, StyleSheet, Dimensions} from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width)

const TopImage = ({uri}) => {
    return <Image style={styles.image} source={{uri: uri}}/>
}

const styles = StyleSheet.create({
    image: {
        width: screenWidth, 
        height: screenWidth
    },
})

export default TopImage;