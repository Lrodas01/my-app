import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React from 'react'
import SavedSearches from './SearchPage/SavedSearches'
import Recommended from './SearchPage/recommended'

const Searchfilter = ({data, input, setInput, }) => {
    
  return (
    <ScrollView contentContainerStyle = {{paddingBottom: 325}}>
      <FlatList data = {data} renderItem={(item) => {
        if (input === "") {
            return(
            <View style = {styles.superContainer}>
                <View  style = {[styles.container, styles.shadowProp]}>
                    <Text style = {{fontSize: 16}}>{item.titleJob}</Text>
                </View>
            </View>
            )
        }

       if ((item.titleJob || '').toLowerCase().includes(input.toLowerCase())) {
            return (
                <View style = {styles.superContainer}>
                <View  style = {[styles.container, styles.shadowProp]}>
                    <Text style = {{fontSize: 24}}>This is </Text>
                </View>
                   </View>
                   
            )
       }
       console.log(item.titleJob)
      }}/>

     <Text style = {styles.recentTextContainer}>Recent Searches</Text>
     <View style = {styles.recentSearchesContainer}>
         <SavedSearches/>
         <SavedSearches/>
         <SavedSearches/>
         <SavedSearches/>
     </View>
         <Text style = {styles.recommendedCareersContainer}>Recommended Careers for you</Text>
     <View style = {styles.recommendedCareers}>
         <Recommended/>
         <Recommended/>
         <Recommended/>
         <Recommended/>
     </View>
        </ScrollView>
  )
}




export default Searchfilter

const styles = StyleSheet.create({
superContainer:{
    top: 20,
    left: 24,
},
container:{
    width: 384, 
    height: 76.25, 
    backgroundColor: 'white', 
    borderRadius: 8,
    marginBottom: 27.75
},
shadowProp:{
    shadowColor: '#171717',
    shadowOffset: { height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
},
recentTextContainer:{
    left: 24,
    top: 26,
    color: 'black', 
    fontSize: 25, 
    fontFamily: 'Nunito', 
    fontWeight: '700', 
    wordWrap: 'break-word',
},
recentSearchesContainer:{
    top: 45,
    alignItems: 'center',
},
recommendedCareersContainer:{
    left: 30,
    top: 26,
    color: 'black', 
    fontSize: 25, 
    fontFamily: 'Nunito', 
    fontWeight: '700', 
    wordWrap: 'break-word'
},
recommendedCareers:{
    top: 42,
    left: 24,
}
})