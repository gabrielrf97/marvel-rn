import React, {useState, useEffect} from 'react'
import { View, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native'
import { SearchBar } from 'react-native-elements'

import ComicItem from '../components/CharacterItem'

import {fetchHQs} from '../helpers/marvelAPI'


const HQListScreen = ({navigation}) => {

    const [state, setState] = useState({comics: [], fetchedPages: 0, search: '', loading: false})

    useEffect( () => {
        fetchData()
    }, [])

    const fetchData = () => {
        setState({...state, loading: true})
        fetchHQs(state.search, state.fetchedPages).then(response => {
            setState({comics: [...state.comics,...response], fetchedPages: state.fetchedPages + 1, loading: false})
        })
    }

    const searchCharacter = (name) => {
        console.log(`New term: ${name}`)
        setState({search: name, fetchedPages: 0, comics: []})
        fetchData()
    }

    const renderFooter = () => {
        if (state.loading) return null;
    
        return (
          <View
            style={{
              position: 'relative',
              width: 200,
              height: 400,
              paddingVertical: 20,
              borderTopWidth: 1,
              marginTop: 10,
              marginBottom: 10,
              borderColor: 'pink'
            }}
          >
            <ActivityIndicator animating size="large" />
          </View>
        );
      };
    

    return <View>
        <SearchBar 
        placeholder="Search character"
        value={state.search}
        onChangeText={searchCharacter}
        lightTheme
        showCancel
        platform = 'ios'
        />
        <FlatList 
        data={state.comics} 
        keyExtractor={(item)=>`${item.id}`}
        numColumns ={2}
        onEndReachedThreshold = {0.5}
        ListFooterComponent = {renderFooter()}
        onEndReached = {() => {
            fetchData()
        }}
        renderItem={({item})=> {
            return <ComicItem characterInfo={item}/>
            }
        }
        />
    </View>
}

export default HQListScreen;