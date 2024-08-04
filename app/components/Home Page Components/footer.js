import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
// import { Ionicons } from '@expo/vector-icons'
// import useNavigation from '@react-navigation/native'
// import { AppContext } from '../../context/AppContext'
import { AppContext } from '../../AppContext';
import { useContext } from 'react';


const Footer = ({navigation, selectedOptions}) => {
  const { selectedCategories, addSelectedCategories } = useContext(AppContext);

  console.log('selectedCategories in footer', selectedCategories);

  return (
    <View style={styles.footer}>

      <View style={styles.homeButton}>
        <Pressable style = {[styles.selectedPage, styles.unselectedPage]} onPress={() => navigation.navigate('ActualHome', {selectedCategories})}>
          <Image style = {styles.home} source={require('../../../assets/footer/home.png')}/>
        </Pressable>
      </View>

      <View style={styles.searchButton}>
        <Pressable style = {[styles.selectedPage, styles.unselectedPage]} onPress={() => navigation.navigate('Search', {selectedCategories})}>
          <Image style={[styles.searchImageButton, {width: 30, height: 30,} ]} source={require('../../../assets/images/searchTie.png')} />
        </Pressable>
      </View>

      <View style={styles.mockInterviewButton}>
        <Pressable style = {[styles.selectedPage, styles.unselectedPage]} onPress={() => navigation.navigate('Interviews', {selectedCategories})}>
          <Image style = {styles.interviews} source = {require('../../../assets/footer/inerviews.png')}/>
        </Pressable>
      </View>
      
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 74,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  homeButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mockInterviewButton: {
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
  selectedPage:{
    backgroundColor: 'white',
  },
  unselectedPage:{
    backgroundColor: 'white'
  },
  home:{
    width: 22,
    height: 22,
  },
  interviews:{
    width: 20,
    height: 20,
  }
})
