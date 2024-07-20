import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native'
import {router} from 'expo-router'
import React, { useState } from 'react'
import Selection from '../components/Selection'

export default function home() {

  const cardsData = [
    { 
      titleText: "Computers",
      descriptionText: "this is description for computers",
      imageURI: require('../../assets/images/computer.png')
    },
    {
      titleText: "Medical",
      descriptionText: "this is description for medical",
      imageURI: require('../../assets/images/medical.webp')
    },
    {
      titleText: "Finance",
      descriptionText: "this is description for financing",
      imageURI: require('../../assets/images/finance.jpg')
    },
    {
      titleText: "Kinesiology",
      descriptionText: "this is descripition for kinesiology",
      imageURI: require('../../assets/images/physical.webp')
    },
];



  return (
    <View style={styles.container}>
      <View style={styles.welcomePage}>
      <Pressable style = {styles.buttonContainer} onPress={() => router.replace('../Pages/welcome')}>
            <Text style = {styles.textButton}>Start finding your interest</Text>
        </Pressable>
        <Image style={styles.imageContainer} source={require('../../assets/images/icon.png')} />
        <Text style={styles.welcomeText}>Welcome to Occupi</Text>
        <Text style={styles.descriptionText}>Lets get started by choosing your interests!</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {cardsData.map((card, index) => (
          <Selection
            key={index} 
            titleText={card.titleText} 
            descriptionText={card.descriptionText} 
            image={card.imageURI} 
          />
        ))}
      </ScrollView>
      <View style = {styles.footer}>
        <View style = {styles.confirmButtonContainer}>
        <Pressable style = {styles.confirmButton}>
          <Text>Confirm your choices?</Text>
        </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Nunito',
    backgroundColor: '#fff', // Ensure the background color is set
  },
  welcomePage: {
    fontFamily: 'Nunito',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 0, // Adjust vertical padding to reduce space
  },
  imageContainer: {
    width: 55,
    height: 55,
    marginTop: 0,
  },
  welcomeText: {
    fontSize: 40,
    marginTop: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 19,
    marginTop: 24,
    lineHeight: 25.92,
    fontWeight: '700',
    textAlign: 'center',
  },
  scrollViewContent: {
    paddingHorizontal: 16,
    paddingBottom: 10, // Add more padding to the bottom to ensure the last item is fully visible
    flexGrow: 1, // Ensures ScrollView takes up remaining space
  },
  footer:{
    height: 70,
  },
  buttonContainer:{

  },
  button: {
    backgroundColor: '#000',
    width: 100,
    height: 50,
    top: 13,
    left: 250,
  },
  confirmButtonContainer:{
    top: 30,
    alignItems: 'center',
  },
  confirmButton:{
    backgroundColor: '#2194FF',
    width: 100,
    height: 40,
  },
});