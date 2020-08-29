import React from 'react';

import { Provider } from 'react-redux';
import store from './store/store';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/Home';
import PokemonScreen from './screens/Pokemon';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

enableScreens();
const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HOME"
            component={HomeScreen}
            options={{ title: 'Pokedex' }}
          />
          <Stack.Screen
            name="Pokemon"
            component={PokemonScreen}
            options={({ route }: any) => ({
              title:
                (route.params.cache && `No.${route.params.cache.order} ${route.params.cache.name}`) ||
                'Loading',
              headerStyle: { backgroundColor: '#5d3acf' },
              headerTitleStyle: {
                color: 'white',
              },
              headerTintColor: 'white',
              direction:"ltr"
            })
          }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
