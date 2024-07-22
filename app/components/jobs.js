// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Home from './Home'; // Adjust the import path
// import DetailsScreen from './DetailsScreen'; // Adjust the import path

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;


// import { Unmatched } from 'expo-router';
// import Welcome from './Pages/welcome'
// import { View, Text, Image } from 'react-native'
// import React, { useEffect, useRef} from 'react'
// // import Home from './Pages/login'
// import axios from 'axios';
// import Jobs from './components/jobs'
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import DetailsScreen from './Pages/';

// export default function app() {

//   const fetchApi = async () => {
//       try {
//     const res = await axios.get('https://localhost:3200/')
//     console.log(res.data)
//       } catch (error) {
//           console.log (error.message);
//       }

//   }

//   useEffect(() => {
//     fetchApi()
//   }, [])

//   const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

//   return (
//     <Welcome/>
//   )
// }
