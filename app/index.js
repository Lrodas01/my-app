import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Pages/login'; // Adjust the import path
import DetailsScreen from './Pages/DetailsScreen'; // Adjust the import path
import Welcome from './Pages/welcome';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent = {true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;