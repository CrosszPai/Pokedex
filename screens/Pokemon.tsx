import React from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { pokemon, AppRoute } from '../store/type';
import asyncStorage from '@react-native-community/async-storage'

interface PokemonScreenProps { }
const PokemonScreen = (props: PokemonScreenProps) => {
    const { params }: AppRoute = useRoute();
    const nav = useNavigation()
    const [data, setData] = React.useState<pokemon | null>(params.cache);
    React.useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        (async () => {
            try {
                const res = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${params.pokemon.name}`,
                    { signal }
                )
                const updated = await res.json()
                setData(updated);
                asyncStorage.setItem(params.pokemon.name, JSON.stringify(updated))
            } catch (error) {
                console.log(error);

            }
        })();
        return () => {
            abortController.abort()
        }
    }, []);
    React.useEffect(() => {
        if (data) {
            nav.setOptions({ title: `No.${data?.order} ${data?.name}` })
        }
    }, [data])
    return (
        <View style={{ padding: 16, alignItems: 'center' }}>
            {!data ? (
                <ActivityIndicator />
            ) : (
                    <>
                        <Image
                            style={{
                                width: 320,
                                height: 320,
                            }}
                            width={320}
                            height={320}
                            source={{ uri: data?.sprites?.['front_default'] }}>
                        </Image>
                    </>
                )}
        </View>
    );
};

export default PokemonScreen;
