import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Pages/login';
import DetailsScreen from './Pages/DetailsScreen'; 
import Welcome from './Pages/welcome';
import Info from './Pages/Info';
import Job from './components/jobInfo';
import Filtered from './components/filteredJobs';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent = {true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Info" component={Info} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  
  );
};

export default App;