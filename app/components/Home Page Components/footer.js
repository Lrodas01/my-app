import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import useNavigation from '@react-navigation/native'

const Footer = ({navigation}) => {


  return (
    <View style={styles.footer}>
      <View style={styles.homeButton}>
        <Pressable onPress={() => navigation.navigate('ActualHome')}>
          <Ionicons name='home-outline' size={25} color='white' />
        </Pressable>
      </View>
      <View style={styles.searchButton}>
        <Pressable onPress={() => navigation.navigate('Interviews')}>
          <Image style={styles.searchImageButton} source={require('../../../assets/images/searchButton.png')} />
        </Pressable>
      </View>
      <View style={styles.mockInterviewButton}>
        <Pressable onPress={() => navigation.navigate('Interviews')}>
          <Ionicons name='chatbox-ellipses-outline' size={25} color='white' />
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
    backgroundColor: '#005FEE',
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
})
