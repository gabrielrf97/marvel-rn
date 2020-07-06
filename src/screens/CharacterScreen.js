import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, Image, ActivityIndicator, FlatList, Dimensions, SafeAreaView, ScrollView} from 'react-native'
import {ListItem} from 'react-native-elements'

import {fetchCharacter} from '../helpers/marvelAPI'
import TopImage from '../components/TopImage'
import Title from '../components/Title'

const CharacterScreen = ({navigation}) => {

    const [character,setCharacter] = useState(null)
    const id = navigation.getParam('id')

    

    useEffect( () => {
        fetchCharacter(id).then((response) => {
            setCharacter(response)
        })
    }, [])

    return <SafeAreaView>
        <ScrollView>
            {character ? 
                <>
                    <TopImage uri={character.thumbnail.path + '.' + character.thumbnail.extension}/>
                    <Title content={character.name}/>
                    <Text style={styles.paragraph}>{character.description}</Text>
                    <Text style={styles.subtitle}>Comics</Text>
                    <FlatList data={character.comics.items} keyExtractor={(item)=>item.resourceURI} 
                        renderItem={({item})=> <ListItem title={item.name}/>} />
                    <Text style={styles.subtitle}>Series</Text>
                    <FlatList data={character.series.items} keyExtractor={(item)=>item.resourceURI} 
                        renderItem={({item})=> <ListItem title={item.name}/>} />
                    <Text style={styles.subtitle}>Stories</Text>
                    <FlatList data={character.stories.items} keyExtractor={(item)=>item.resourceURI} 
                        renderItem={({item})=> <ListItem title={item.name}/>} />
                    { character.events.length > 0 ?
                        <>
                            <Text style={styles.subtitle}>Events</Text>
                            <FlatList data={character.events.items} keyExtractor={(item)=>item.resourceURI} 
                            renderItem={({item})=> <ListItem title={item.name}/>} />
                        </>
                        : null
                    }
                    
                </>
            : <ActivityIndicator size='large' />
            }
        </ScrollView>
    </SafeAreaView>
}

CharacterScreen.navigationOptions = {
    headerTitle: "Character"
}

const screenWidth = Math.round(Dimensions.get('window').width)

const styles = StyleSheet.create({
    paragraph: {
        fontSize: 18, 
        marginHorizontal: 10
    }, subtitle: {
        fontSize: 22, 
        margin: 10
    }
})

export default CharacterScreen;