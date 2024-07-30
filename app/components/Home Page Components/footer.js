import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import useNavigation from '@react-navigation/native'

const Footer = ({navigation}) => {


  return (
    <View style={styles.footer}>
      <View style={styles.homeButton}>
        <Pressable style = {[styles.selectedPage, styles.unselectedPage]} onPress={() => navigation.navigate('ActualHome')}>
          <Ionicons name='home-outline' size={25} color='grey' />
        </Pressable>
        {/* <Pressable
            style={[
              styles.confirmButton,
              selectedOptions.length === 0 && styles.disabledButton
            ]}
            onPress={() => navigation.navigate('Details', { selectedOptions })}
            disabled={selectedOptions.length === 0}
          >
            <Text style={selectedOptions.length === 0 ? styles.disabledButtonText : styles.confirmButtonText}>
              Confirm your choices?
            </Text>
          </Pressable> */}
      </View>
      <View style={styles.searchButton}>
        <Pressable style = {[styles.selectedPage, styles.unselectedPage]} onPress={() => navigation.navigate('Search')}>
          <Image style={[styles.searchImageButton, {width: 30, height: 30,} ]} source={require('../../../assets/images/searchTie.png')} />
        </Pressable>
      </View>
      <View style={styles.mockInterviewButton}>
        <Pressable style = {[styles.selectedPage, styles.unselectedPage]} onPress={() => navigation.navigate('Interviews')}>
          <Ionicons name='chatbox-ellipses-outline' size={25} color='grey' />
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
})
