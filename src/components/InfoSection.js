import React from 'react'
import {FlatList} from 'react-native'
import {ListItem} from 'react-native-elements'

import Subtitle from './Subtitle'

const InfoSection = ({title, data}) => {
    return data.length > 0 ?
        <>
            <Subtitle content={title}/>
            <FlatList data={data} keyExtractor={(item)=>item.resourceURI} 
            renderItem={({item})=> <ListItem title={item.name}/>} />
        </>
        : null
}

export default InfoSection;