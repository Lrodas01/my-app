import { View, Text, Image, StyleSheet, ScrollView, Pressable, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { Screen } from 'react-native-screens';
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
  ];

  return (

    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="#005FEE" />
      <View style={styles.welcomeHeader}>
        {/* <Pressable style={styles.buttonContainer} onPress={() => navigation.goBack('Welcome')}>
          <Text style={styles.textButton}>Start finding your interest</Text>
        </Pressable> */}
        <Text style={styles.welcomeText}>Welcome! lets see what your interests are :)</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style = {{flexDirection: 'row',flexWrap: 'wrap'}}>
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
      </View>
      </ScrollView>
      <View style={[styles.footer, styles.shadowProp]}>
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
  screen: {
    flex: 1,
    backgroundColor: '#005FEE', // Set your desired background color here
  },
  welcomeHeader: {
    height: 100, 
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
imageContainer: {
    width: 55,
    height: 55,
    marginTop: 0,
  },
welcomeText: {
    width: 345, 
    color: 'white', 
    fontSize: 25, 
    fontFamily: 'Nunito', 
    fontWeight: '700', 
    wordWrap: 'break-word'
  },
descriptionText: {
    fontSize: 19,
    marginTop: 24,
    lineHeight: 25.92,
    fontWeight: '700',
    textAlign: 'center',
  },
scrollViewContent: {
    top: 37,
    paddingHorizontal: 16,
    paddingBottom: 10,
    flexGrow: 1,
  },
footer: {
  height: 118,
  backgroundColor: 'white'
  },
shadowProp:{
  shadowColor: '#4D4D4D',
  shadowOffset: { height: -12 },
  shadowOpacity: 0.16,
  shadowRadius: 3,
},
confirmButtonContainer: {
    top: 30,
    alignItems: 'center',
  },
confirmButton: {
  backgroundColor: '#005FEE',
  width: 346, 
  height: 54, 
  paddingLeft: 24, 
  paddingRight: 24, 
  paddingTop: 16, 
  paddingBottom: 16, 
  borderRadius: 8, 
  justifyContent: 'center', 
  alignItems: 'center', 
  gap: 10, 
  display: 'inline-flex',
  },
confirmButtonText:{
  width: 298, 
  textAlign: 'center', 
  color: 'white', 
  fontSize: 16, 
  fontFamily: 'Nunito', 
  fontWeight: '900', 
  wordWrap: 'break-word'
  },
disabledButton: {
    backgroundColor: '#cccccc',
    width: 346, 
    height: 54, 
    paddingLeft: 24, 
    paddingRight: 24, 
    paddingTop: 16, 
    paddingBottom: 16, 
    borderRadius: 8, 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 10, 
    display: 'inline-flex',
  },
disabledButtonText: {
    width: 298, 
    textAlign: 'center', 
    color: 'white', 
    fontSize: 16, 
    fontFamily: 'Nunito', 
    fontWeight: '900', 
    wordWrap: 'break-word'
  },
});

export default Home;