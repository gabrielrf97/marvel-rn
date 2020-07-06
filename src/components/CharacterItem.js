import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'

const CharacterItem = ({characterInfo}) => {
    
    let picturePath = characterInfo.thumbnail.path +'.'+ characterInfo.thumbnail.extension
    return <View style={styles.container}>
        <Image source={{uri: picturePath}} style={styles.heroImage}/>
        <Text style={styles.heroName}>{characterInfo.name}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginBottom: 0,
        flex: 1
    },
    heroImage: {
        minWidth: 180,
        minHeight: 180,
        borderRadius: 22
    },
    heroName: {
        height: 40,
        textAlign: 'center',
        fontSize: 22,
        marginTop: 4,
    }
})

export default CharacterItem;