import React from 'react'
import {Text, StyleSheet} from 'react-native'


const Title = ({content}) => {
    return <Text style={styles.title}> {content} </Text>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28, 
        margin: 10
    },
})

export default Title;