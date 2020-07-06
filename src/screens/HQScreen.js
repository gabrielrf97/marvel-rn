import React, {useState, useEffect} from 'react'
import { ActivityIndicator, SafeAreaView, ScrollView} from 'react-native'

import {fetchSingleItem} from '../helpers/marvelAPI'

import TopImage from '../components/TopImage'
import Title from '../components/Title'
import Paragraph from '../components/Paragraph'
import InfoSection from '../components/InfoSection'

const HQScreen = ({navigation}) => {

    const [serie,setSerie] = useState(null)
    const id = navigation.getParam('id')

    useEffect( () => {
        fetchSingleItem('comics', id).then((response) => {
            setSerie(response)
        })
    }, [])

    return <SafeAreaView>
        <ScrollView>
            {serie ? 
                <>
                    <TopImage uri={serie.thumbnail.path + '.' + serie.thumbnail.extension} />
                    <Title content={serie.title}/>
                    <Paragraph content={serie.description}/>
                    <InfoSection data={serie.characters.items} title="Characters" />
                    <InfoSection data={serie.creators.items} title="Creators" />            
                </>
            : <ActivityIndicator size='large' />
            }
        </ScrollView>
    </SafeAreaView>
}

HQScreen.navigationOptions = {
    headerTitle: "HQ"
}

export default HQScreen;