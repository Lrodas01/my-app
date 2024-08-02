import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { AppProvider } from './AppContext';

import Home from './Pages/home';
import DetailsScreen from './Pages/DetailsScreen';
import Welcome from './Pages/welcome';
import SpecificJobs from './Pages/SpecificJobs';
import Interviews from './Pages/Interviews';

import Schedule from './components/schedule'
import Colleges from './components/colleges';
import ActualHome from './Pages/HomePage';
import Footer from './components/Home Page Components/footer';
import Search from './Pages/Search';
import SavedSearches from './components/SearchPage/SavedSearches';
import Programs from './Pages/Programs';
import Websites from './components/websites';
import Initiatives from './components/Initiatives';
import Benefits from './components/benefits';
import Basics from './Pages/The basics/Basics';
import PageOne from './Pages/The basics/PageOne';
import No from './Pages/The basics/No';
import NoTwo from './Pages/The basics/Templates/TemplateOne';
import PageTwo from './Pages/The basics/PageTwo';
import TemplateOne from './Pages/The basics/Templates/TemplateOne';
import TemplateTwo from './Pages/The basics/Templates/TemplateTwo';
import TemplateThree from './Pages/The basics/Templates/TemplateThree';
import TemplateFour from './Pages/The basics/Templates/TemplateFour';
import ResumeBasics from './Pages/Resume/ResumeBasics';
import Resume1 from './Pages/Resume/Resume1';
import Resume2 from './Pages/Resume/Resume2';
import Resume3 from './Pages/Resume/Resume3';
import Resume4 from './Pages/Resume/Resume4';
import Resume5 from './Pages/Resume/Resume5';
import Resume6 from './Pages/Resume/Resume6';
import Resume7 from './Pages/Resume/Resume7';
import SetUp from './Pages/SetUp';

const Stack = createStackNavigator();

const App = () => {
  return (

 <AppProvider>
    <StatusBar translucent={true} backgroundColor="#005FEE" />
     <Stack.Navigator initialRouteName="Welcome" >
       <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
       <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
       <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
       <Stack.Screen name="SpecificJobs" component={SpecificJobs} options={{ headerShown: false }} />
       <Stack.Screen name="Interviews" component={Interviews} options={{ headerShown: false }} />
       <Stack.Screen name="ActualHome" component={ActualHome} options={{ headerShown: false }} />
       <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
       <Stack.Screen name="Programs" component={Programs} options={{ headerShown: false }} />  
       <Stack.Screen name="Basics" component={Basics} options={{ headerShown: false }} />  
       <Stack.Screen name="PageOne" component={PageOne} options={{ headerShown: false }} />  
       <Stack.Screen name="No" component={No} options={{ headerShown: false }} />  
       <Stack.Screen name="TemplateOne" component={TemplateOne} options={{ headerShown: false }} />  
       <Stack.Screen name="TemplateTwo" component={TemplateTwo} options={{ headerShown: false }} />  
       <Stack.Screen name="TemplateThree" component={TemplateThree} options={{ headerShown: false }} />  
       <Stack.Screen name="TemplateFour" component={TemplateFour} options={{ headerShown: false }} />  
       <Stack.Screen name="ResumeBasics" component={ResumeBasics} options={{ headerShown: false }} /> 
       <Stack.Screen name="Resume1" component={Resume1} options={{ headerShown: false }} />  
       <Stack.Screen name="Resume2" component={Resume2} options={{ headerShown: false }} />  
       <Stack.Screen name="Resume3" component={Resume3} options={{ headerShown: false }} />  
       <Stack.Screen name="Resume4" component={Resume4} options={{ headerShown: false }} />  
       <Stack.Screen name="Resume5" component={Resume5} options={{ headerShown: false }} />  
       <Stack.Screen name="Resume6" component={Resume6} options={{ headerShown: false }} />  
       <Stack.Screen name="Resume7" component={Resume7} options={{ headerShown: false }} />  
       <Stack.Screen name="SetUp" component={SetUp} options={{ headerShown: false }} />  

       <Stack.Screen name="PageTwo" component={PageTwo} options={{ headerShown: false }} />  

     </Stack.Navigator>
</AppProvider>   
    // <Colleges/>
    // <Schedule/>
    // <Interviews/>
    // <Footer/>
    // <SavedSearches/>
    // <Initiatives/>
    // <Benefits/>
    // <Basics/>
  );
};

export default App;
