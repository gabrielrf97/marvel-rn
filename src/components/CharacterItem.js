import React from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {withNavigation} from 'react-navigation'

const CharacterItem = ({navigation, characterInfo, pressRoute}) => {
    
    let picturePath = characterInfo.thumbnail.path +'.'+ characterInfo.thumbnail.extension
    return <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate(pressRoute, {id: characterInfo.id})}>
            <Image source={{uri: picturePath}} style={styles.heroImage}/>
            <Text style={styles.heroName}>{characterInfo.name}</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginBottom: 0,
        flex: 1
    },
    heroImage: {
        width: 180,
        height: 180,
        borderRadius: 22
    },
    heroName: {
        height: 40,
        textAlign: 'center',
        fontSize: 22,
        marginTop: 4,
    }
})

export default withNavigation(CharacterItem);