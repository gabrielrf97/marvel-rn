import React, {useState, useEffect} from 'react'
import { ActivityIndicator, SafeAreaView, ScrollView} from 'react-native'

import {fetchSingleItem} from '../helpers/marvelAPI'

import TopImage from '../components/TopImage'
import Title from '../components/Title'
import Paragraph from '../components/Paragraph'
import InfoSection from '../components/InfoSection'

const SerieScreen = ({navigation}) => {

    const [serie,setSerie] = useState(null)
    const id = navigation.getParam('id')

    useEffect( () => {
        fetchSingleItem('series', id).then((response) => {
            setSerie(response)
        })
    }, [])

    return <SafeAreaView>
        <ScrollView>
            {serie ? 
                <>
                    <TopImage uri={serie.thumbnail.path + '.' + serie.thumbnail.extension}/>
                    <Title content={serie.title} />
                    <Paragraph content={serie.description}/>
                    <InfoSection title="Characters" data={serie.characters.items} />
                    <InfoSection title="Creators" data={serie.creators.items} />               
                </>
            : <ActivityIndicator size='large' />
            }
        </ScrollView>
    </SafeAreaView>
}

SerieScreen.navigationOptions = {
    headerTitle: "Serie"
}

export default SerieScreen;