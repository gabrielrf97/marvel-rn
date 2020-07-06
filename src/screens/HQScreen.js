import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, Image, ActivityIndicator, FlatList, SafeAreaView, ScrollView} from 'react-native'
import {ListItem} from 'react-native-elements'

import {fetchComic} from '../helpers/marvelAPI'

import TopImage from '../components/TopImage'
import Title from '../components/Title'

const HQScreen = ({navigation}) => {

    const [serie,setSerie] = useState(null)
    const id = navigation.getParam('id')

    useEffect( () => {
        fetchComic(id).then((response) => {
            setSerie(response)
        })
    }, [])

    return <SafeAreaView>
        <ScrollView>
            {serie ? 
                <>
                    <TopImage uri={serie.thumbnail.path + '.' + serie.thumbnail.extension} />
                    <Title content={serie.title}/>
                    <Text style={styles.paragraph}>{serie.description}</Text>
                    <Text style={styles.subtitle}>Characters</Text>
                    <FlatList data={serie.characters.items} keyExtractor={(item)=>item.resourceURI} 
                        renderItem={({item})=> <ListItem title={item.name}/>} />
                    <Text style={styles.subtitle}>Creators</Text>
                    <FlatList data={serie.creators.items} keyExtractor={(item)=>item.resourceURI} 
                        renderItem={({item})=> <ListItem title={item.name}/>} />                 
                </>
            : <ActivityIndicator size='large' />
            }
        </ScrollView>
    </SafeAreaView>
}

HQScreen.navigationOptions = {
    headerTitle: "HQ"
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28, 
        margin: 10
    }, paragraph: {
        fontSize: 18, 
        marginHorizontal: 10
    }, subtitle: {
        fontSize: 22, 
        margin: 10
    }
})

export default HQScreen;