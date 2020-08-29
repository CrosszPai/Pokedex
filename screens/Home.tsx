import React from 'react'
import { View, Text,Dimensions } from 'react-native'
import ListPokemon from '../components/ListPokemon'
import PaginationButton from '../components/PaginationButton'

interface HomePageProps {

}
const height = Dimensions.get('screen').height
const HomeScreen = (props: HomePageProps) => {
    return (
        <View style={{
            flex:1,
            padding:16
        }}>
            <ListPokemon/>
            <PaginationButton/>
        </View>
    )
}

export default HomeScreen