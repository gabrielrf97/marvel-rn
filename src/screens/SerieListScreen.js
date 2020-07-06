import React, {useState, useEffect} from 'react'
import { View, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native'
import { SearchBar } from 'react-native-elements'

import {fetchList} from '../helpers/marvelAPI'
import ComicItem from '../components/ComicItem'


const SerieListScreen = ({navigation}) => {

    const [state, setState] = useState({series: [], fetchedPages: 0, search: '', loading: false})

    useEffect( () => {
        fetchData()
    }, [])

    const fetchData = () => {
        setState({...state, loading: true})
        fetchList('/series', state.search, state.fetchedPages).then(response => {
            setState({series: [...state.series,...response], fetchedPages: state.fetchedPages + 1, loading: false})
        })
    }

    const searchCharacter = (name) => {
        console.log(`New term: ${name}`)
        setState({search: name, fetchedPages: 0, characters: []})
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
        data={state.series} 
        keyExtractor={(item)=>`${item.id}`}
        numColumns ={2}
        onEndReachedThreshold = {0.5}
        ListFooterComponent = {renderFooter()}
        onEndReached = {() => {
            fetchData()
        }}
        renderItem={({item})=> {
            return <ComicItem comicInfo={item} pressRoute='SerieScreen'/>
            }
        }
        />
    </View>
}

export default SerieListScreen;