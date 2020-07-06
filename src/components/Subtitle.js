import React from 'react'
import {Text, StyleSheet} from 'react-native'

const Subtitle = ({content}) => {
    return <Text style={styles.title}> {content} </Text>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22, 
        margin: 10
    },
})

export default Subtitle;