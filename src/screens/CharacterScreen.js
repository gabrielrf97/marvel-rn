import React, {useState, useEffect} from 'react'
import { View, Text, Image, ActivityIndicator, FlatList} from 'react-native'
import {ListItem} from 'react-native-elements'

import {fetchCharacter} from '../helpers/marvelAPI'

const CharacterScreen = ({navigation}) => {

    const [character,setCharacter] = useState(null)

    const id = navigation.getParam('id')

    useEffect( () => {
        fetchCharacter(id).then((response) => {
            setCharacter(response)
        })
    }, [])

    return <View>
        {character ? 
            <>
                <Image source={{uri: character.thumbnail.path + '.' + character.thumbnail.extension}} style={{width: 200, height: 200}}/>
                <Text>{character.name}</Text>
                <Text>{character.description}</Text>
                <Text>Comics</Text>
                <FlatList data={character.comics.items} keyExtractor={(item)=>item.resourceURI} 
                    renderItem={({item})=> <ListItem title={item.name}/>} />
                <Text>Series</Text>
                <FlatList data={character.series.items} keyExtractor={(item)=>item.resourceURI} 
                    renderItem={({item})=> <ListItem title={item.name}/>} />
                <Text>Stories</Text>
                <FlatList data={character.stories.items} keyExtractor={(item)=>item.resourceURI} 
                    renderItem={({item})=> <ListItem title={item.name}/>} />
                <Text>Movies</Text>
                <FlatList data={character.events.items} keyExtractor={(item)=>item.resourceURI} 
                    renderItem={({item})=> <ListItem title={item.name}/>} />
            </>
        : <ActivityIndicator size='large' />
        }
    </View>
}

export default CharacterScreen;