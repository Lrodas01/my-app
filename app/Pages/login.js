import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';
import Selection from '../components/Selection';


const Home = ({ navigation }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (title, isSelected) => {
    setSelectedOptions((prev) => {
      if (isSelected) {
        return [...prev, title];
      } else {
        return prev.filter((option) => option !== title);
      }
    });
  };

  const cardsData = [
    { 
      type: "Computers",
      titleText: "Computers",
      descriptionText: "this is description for computers",
      imageURI: require('../../assets/images/computer.png')
    },
    {
      type: "Medical",
      titleText: "Medical",
      descriptionText: "this is description for medical",
      imageURI: require('../../assets/images/medical.webp')
    },
    {
      type: "Finance",
      titleText: "Finance",
      descriptionText: "this is description for financing",
      imageURI: require('../../assets/images/finance.jpg')
    },
    {
      type: "Kinesiology",
      titleText: "Kinesiology",
      descriptionText: "this is description for kinesiology",
      imageURI: require('../../assets/images/physical.webp')
    },
    { 
      type: "5",
      titleText: "5",
      descriptionText: "this is description for computers",
      imageURI: require('../../assets/images/computer.png')
    },
    { 
      type: "6",
      titleText: "6",
      descriptionText: "this is description for computers",
      imageURI: require('../../assets/images/computer.png')
    },
    { 
      type: "7",
      titleText: "7",
      descriptionText: "this is description for computers",
      imageURI: require('../../assets/images/computer.png')
    },
    { 
      type: "8",
      titleText: "8",
      descriptionText: "this is description for computers",
      imageURI: require('../../assets/images/computer.png')
    },
    { 
      type: "9",
      titleText: "9",
      descriptionText: "this is description for computers",
      imageURI: require('../../assets/images/computer.png')
    },
    { 
      type: "10",
      titleText: "10",
      descriptionText: "this is description for computers",
      imageURI: require('../../assets/images/computer.png')
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.welcomePage}>
        <Pressable style={styles.buttonContainer} onPress={() => navigation.replace('Welcome')}>
          <Text style={styles.textButton}>Start finding your interest</Text>
        </Pressable>
        <Image style={styles.imageContainer} source={require('../../assets/images/icon.png')} />
        <Text style={styles.welcomeText}>Welcome to Occupi</Text>
        <Text style={styles.descriptionText}>Let's get started by choosing your interests!</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {cardsData.map((card, index) => (
          <Selection
            key={index}
            titleText={card.titleText}
            descriptionText={card.descriptionText}
            image={card.imageURI}
            onSelect={handleSelect}
          />
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.confirmButtonContainer}>
          <Pressable style={styles.confirmButton} onPress={() => navigation.navigate('Details', { selectedOptions })}>
            <Text>Confirm your choices?</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Nunito',
    backgroundColor: '#fff',
  },
  welcomePage: {
    fontFamily: 'Nunito',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 0,
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
    paddingBottom: 10,
    flexGrow: 1,
  },
  footer: {
    height: 70,
  },
  buttonContainer: {},
  button: {
    backgroundColor: '#000',
    width: 100,
    height: 50,
    top: 13,
    left: 250,
  },
  confirmButtonContainer: {
    top: 30,
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: '#2194FF',
    width: 100,
    height: 40,
  },
});

export default Home;