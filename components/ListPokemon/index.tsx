import React from 'react';
import { useSelector } from 'react-redux';
import { RootStore } from '../../store/store';
import {
  View,
  Text,
  ActivityIndicator,
  Pressable,
  useWindowDimensions,
  VirtualizedList,
  ListRenderItemInfo,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import asyncStorage from '@react-native-community/async-storage'
import { pokemon } from '../../store/type';

async function getCache(name: string): Promise<pokemon | null> {
  try {
    return JSON.parse((await asyncStorage.getItem(name)) as string) as pokemon
  } catch {
    return null
  }
}

const ListPokemon = () => {
  const select = useSelector((state: RootStore) => ({
    pokemon: state.pokemon,
    status: state.network,
    gen: state.counter
  }));
  const nav = useNavigation();
  const dim = useWindowDimensions();
  return (
    <View>
      {select.status.progress === 'IDLE' ? (
        <View
          style={{
            maxHeight: dim.height - 64 * 3,
          }}>
          <Text style={{
            fontSize: 32,
            textAlign: 'center'
          }}>Generation: {select.gen}</Text>
          <VirtualizedList
            data={select.pokemon}
            initialNumToRender={10}
            getItem={(data: pokemon[], index): pokemon => {
              return {
                name: data[index].name
              }
            }}
            keyExtractor={(data) => data.name}
            getItemCount={() => select.pokemon.length}
            renderItem={({ item }: ListRenderItemInfo<pokemon>) => (
              <Pressable
                style={{ padding: 16 }}
                key={item.name}
                onPress={async() => {
                  nav.navigate('Pokemon', {
                    pokemon: {
                      name: item.name,
                    },
                    cache: await getCache(item.name)
                  });
                }}>
                <Text>{item.name}</Text>
              </Pressable>
            )}></VirtualizedList>
        </View>
      ) : (
          <ActivityIndicator />
        )}
    </View>
  );
};

export default ListPokemon;
