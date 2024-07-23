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
      descriptionText: "This is a description for computers",
      imageURI: require('../../assets/images/computer.png'),
    },
    {
      type: "Medical",
      titleText: "Medical",
      descriptionText: "This is a description for medical",
      imageURI: require('../../assets/images/medical.webp'),
    },
    {
      type: "Finance",
      titleText: "Finance",
      descriptionText: "This is a description for finance",
      imageURI: require('../../assets/images/finance.jpg'),
    },
    {
      type: "Kinesiology",
      titleText: "Kinesiology",
      descriptionText: "This is a description for kinesiology",
      imageURI: require('../../assets/images/physical.webp'),
    },
    // Add more card data as needed
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
            key={index} // Using index as key, make sure titleText is unique for better key usage
            titleText={card.titleText}
            descriptionText={card.descriptionText}
            image={card.imageURI}
            onSelect={handleSelect}
            selected={selectedOptions.includes(card.titleText)}
          />
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.confirmButtonContainer}>
        <Pressable
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
  disabledButton: {
    backgroundColor: '#cccccc',
  },
  disabledButtonText: {
    color: '#666666',
  },
});

export default Home;