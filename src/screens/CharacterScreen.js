import React, {useState, useEffect} from 'react'
import { ActivityIndicator, Dimensions, SafeAreaView, ScrollView} from 'react-native'

import {fetchSingleItem} from '../helpers/marvelAPI'

import TopImage from '../components/TopImage'
import Title from '../components/Title'
import Paragraph from '../components/Paragraph'
import InfoSection from '../components/InfoSection'

const CharacterScreen = ({navigation}) => {

    const [character,setCharacter] = useState(null)
    const id = navigation.getParam('id')

    useEffect( () => {
        fetchSingleItem('characters', id).then((response) => {
            setCharacter(response)
        })
    }, [])

    return <SafeAreaView>
        <ScrollView>
            {character ? 
                <>
                    <TopImage uri={character.thumbnail.path + '.' + character.thumbnail.extension}/>
                    <Title content={character.name}/>
                    <Paragraph content={character.description} />
                    <InfoSection data={character.comics.items} title="Comics" />
                    <InfoSection data={character.series.items} title="Series" />
                    <InfoSection data={character.stories.items} title="Stories" />
                    <InfoSection data={character.events.items} title="Events" />
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

export default CharacterScreen;