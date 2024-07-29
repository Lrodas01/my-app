import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Footer from '../components/Home Page Components/footer'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import SavedSearches from '../components/SearchPage/SavedSearches'
import { AppContext } from '../AppContext'
import Recommended from '../components/SearchPage/recommended'

const Search = ({ navigation }) => {

    const { cardsData } = useContext(AppContext)

  return (
<View style = {styles.container}>

    <View style = {styles.header}> 
        <Text style = {styles.headerText}>Search Page</Text>
    </View>
    <ScrollView contentContainerStyle = {{paddingBottom: 125,}}>
    <View style = {styles.searchContainer}>
        <Text style = {styles.searchText}>Search</Text>
        <View style={[styles.searchBar, styles.searchBarOutline]}>
          <TextInput style={[styles.searchBarText]}>
            Search...
          </TextInput>                                                                                                                        
          <View style={styles.ionoconsContainer}>
            <Ionicons style={styles.ionocon} name='close-outline' size={16} />
          </View>
        </View>
    </View>

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
    <Footer navigation={navigation}/>
</View>
  )
}

export default Search

const styles = StyleSheet.create({
container:{
    backgroundColor: 'white',
    height: '100%',
},
header:{
    height: 68, 
    paddingLeft: 24, 
    paddingRight: 24, 
    paddingTop: 16, 
    paddingBottom: 16, 
    backgroundColor: '#005FEE', 
    borderBottomLeftRadius: 8, 
    borderBottomRightRadius: 8, 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 10, 
    display: 'inline-flex'
},
headerText:{
    width: 345, 
    color: 'white', 
    fontSize: 25, 
    fontFamily: 'Nunito', 
    fontWeight: '700', 
    wordWrap: 'break-word'
},
searchContainer:{
    top: 23,
    left: 22,
    width: 387, 
    height: 98, 
    background: 'white', 
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', 
    borderRadius: 19, 
    justifyContent: 'flex-start', 
    alignItems: 'flex-start', 
    gap: 269, 
    display: 'inline-flex',
},
searchText:{
    color: 'black', 
    fontSize: 25, 
    fontFamily: 'Nunito', 
    fontWeight: '700', 
    wordWrap: 'break-word'
},
searchBar: {
    bottom: 250,
    width: 387, 
    height: 40, 
    paddingLeft: 16, 
    paddingRight: 16, 
    paddingTop: 12, 
    paddingBottom: 12, 
    backgroundColor: 'white', 
    borderRadius: 9999, 
    overflow: 'hidden', 
    border: '1px #D9D9D9 solid', 
    justifyContent: 'flex-start', 
    alignItems: 'center',
    gap: 8, 
    display: 'inline-flex'
  },
searchBarOutline: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
},
searchBarText: {
    right: 20,
    height: 20,
    width: 301, 
    color: '#1E1E1E', 
    fontSize: 16, 
    fontFamily: 'Inter', 
    fontWeight: '400', 
    wordWrap: 'break-word',
    lineHeight: 16, 
},
ionoconsContainer: {
    position: 'absolute',
    top: 11,
    right: 20,
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