import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

import Home from './Pages/home';
import DetailsScreen from './Pages/DetailsScreen';
import Welcome from './Pages/welcome';
import SpecificJobs from './Pages/SpecificJobs';
import Interviews from './Pages/Interviews';

import Schedule from './components/schedule'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent = {true}>
      {/* Setting the status bar background color */}
      <StatusBar style="light" translucent={false} backgroundColor="#005FEE" />
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SpecificJobs" component={SpecificJobs} options={{ headerShown: false }} />
        <Stack.Screen name="Interviews" component={Interviews} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
    // <Schedule/>
  );
};

export default App;
