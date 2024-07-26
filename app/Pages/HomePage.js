import { Pressable, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Interests from '../components/Home Page Components/interests'
import Interships from '../components/Home Page Components/interships'
import Recent from '../components/Home Page Components/recent'

const ActualHome = ({navigation, route }) => {



  return (
<>
    <View style = {styles.header}>
      <Text style = {styles.headerText}>Home</Text>
      <Ionicons style = {styles.funnel} name = 'funnel-outline' size = {36} color={'white'}></Ionicons>
    </View>
      <Pressable style = {{position: 'absolute'}} onPress = {()=> {navigation.goBack('Welcome')}}>
        <Text>Go back, this page is not done</Text>
      </Pressable>
    <View>
      <Text style = {styles.exploreText}>Explore</Text>
    </View>
    <View style = {[styles.searchBar, styles.searchBarOutline]}>
      <Text style = {[styles.searchBarText]}>
        Search...
      </Text>
      <View style = {styles.ionoconsContainer}>
        <Ionicons style = {styles.ionocon} name = 'close-outline' size = {16}></Ionicons>
      </View>
    </View>
    <View style = {styles.recentContainer}>
      <Text style = {styles.recentText}>Recent</Text>
    </View>
    <ScrollView horizontal contentContainerStyle = {styles.scrollContent}>
      <Recent/>
      <Recent/>
      <Recent/>
      <Recent/>
    </ScrollView>
      <View>
        <Text style = {styles.intershipText}>Interships for you</Text>
      </View>
    <ScrollView>

    </ScrollView>
    <View style={styles.footer}>
        <Pressable style={styles.homeButton} onPress={() => navigation.navigate('ActualHome')}>
          <Ionicons name='home-outline' size={25} color='white'></Ionicons>
        </Pressable>
        <Pressable style={styles.searchButton}>
          <Image style={styles.searchImageButton} source={require('../../assets/images/searchButton.png')} />
        </Pressable>
        <Pressable style={styles.mockInterviewButton} onPress={() => navigation.navigate('Interviews')}>
          <Ionicons name='chatbox-ellipses-outline' size={25} color='white'></Ionicons>
        </Pressable>
      </View>
</>
  )
}

export default ActualHome

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white'
  },
  funnel:{
    position: 'absolute',
    left: 374.5,
  },
  scrollContent:{
    paddingRight: 48,
  },
  header:{
      width: 430, 
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
      display: 'inline-flex',
      position: "absolute",
  },
  headerText:{
      width: 345, 
      textAlign: 'center', 
      color: 'white', 
      fontSize: 25, 
      fontFamily: 'Nunito', 
      fontWeight: '700', 
      wordWrap: 'break-word',
      position: 'absolute',
  },
  exploreText:{
    top: 68,
    left: 29,
    color: 'black', 
    fontSize: 25, 
    fontFamily: 'Nunito', 
    fontWeight: '700', 
    wordWrap: 'break-word'
  },
  searchBar:{
    position: 'absolute',
    top: 125,
    left: 24,
    width: 387, 
    height: 40, 
    paddingLeft: 16, 
    paddingRight: 16, 
    paddingTop: 12, 
    paddingBottom: 12, 
    backgroundColor: 'white', 
    borderRadius: '100%', 
    overflow: 'hidden', 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    gap: 8, 
    display: 'inline-flex'
  },
  searchBarOutline:{
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },
  searchBarText:{
    width: 331, 
    color: '#1E1E1E', 
    fontSize: 16, 
    fontFamily: 'Inter', 
    fontWeight: '400', 
    lineHeight: 16, 
    wordWrap: 'break-word'
  },
  ionoconsContainer:{
    left: 350,
    top: 10,
    width: 16, 
    height: 16, 
    position: 'absolute' 
  },
  recentText:{
    color: 'black', 
    fontSize: 25, 
    fontFamily: 'Nunito', 
    fontWeight: '700', 
    wordWrap: 'break-word'
  },
  recentContainer:{
    position: 'absolute',
    top: 188,
    left: 31,
  },
  intershipText:{
    position: 'absolute',
    bottom: 50,
    left: 29,
    color: 'black', 
    fontSize: 25, 
    fontFamily: 'Nunito', 
    fontWeight: '700', 
    wordWrap: 'break-word'
  },

  homeButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButton: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchImageButton: {
    width: 20,
    height: 20,
  },
  mockInterviewButton: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    position: 'absolute',
    top: 770,
    width: '100%',
    height: 74,
    flexDirection: 'row', 
    backgroundColor: '#005FEE',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
})