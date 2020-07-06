import React from 'react'
import {Text, StyleSheet} from 'react-native'

const Paragraph = ({content}) => {
    return <Text style={styles.paragraph}> {content} </Text>
}

const styles = StyleSheet.create({
    paragraph: {
        fontSize: 18, 
        marginHorizontal: 10
    },
})

export default Paragraph;