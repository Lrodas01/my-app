import { View, Text, Image, StyleSheet, ScrollView, Pressable, StatusBar } from 'react-native';
import React, { useContext, useState } from 'react';
import { Screen } from 'react-native-screens';
import Selection from '../components/Selection';
import { AppContext } from '../AppContext';


const Home = ({ navigation }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { cardsData, addSelectedCategory, selectedCategories } = useContext(AppContext);

  const handleSelect = (title, isSelected) => {
    setSelectedOptions((prev) => {
      if (isSelected) {
        return [...prev, title];
      } else {
        return prev.filter((option) => option !== title);
      }
    });

    console.log("Before adding the category: ", selectedCategories);
    
    console.log("Title: ", title);
    addSelectedCategory(title);

    console.log("After adding the category: ", selectedCategories);
  };


  return (

    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="#005FEE" />
      <View style={styles.welcomeHeader}>
        {/* <Pressable style={styles.buttonContainer} onPress={() => navigation.goBack('Welcome')}>
          <Text style={styles.textButton}>Start finding your interest</Text>
        </Pressable> */}
        <Text style={styles.welcomeText}>Career Interests</Text>
      </View>

      <View style = {[styles.loadingBarContainer, styles.shadowDown]}>
        <View style = {styles.loadingBar}>

        </View>
      </View>

      <View>
        <Text style = {styles.descript}>
        Okay, have you known any careers that interest you?
        </Text>
      </View>
          <View style = {{height: 100}}>

          </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style = {{flexDirection: 'row',flexWrap: 'wrap', paddingBottom: 20,}}>
        {cardsData.map((card, index) => (
          <Selection
            key={index}
            titleText={card.titleText}
            descriptionText={card.descriptionText}
            image={card.imageURI}
            jobCardImagr = {card.jobCardURI}
            selectedImage={card.selectedImageURI}
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
            onPress={() => navigation.navigate('ActualHome', { selectedOptions })}
            disabled={selectedOptions.length === 0}
          >
            <Text style={selectedOptions.length === 0 ? styles.disabledButtonText : styles.confirmButtonText}>
              Apply
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
  width: 430, 
  height: 66, 
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
  shadowRadius: 16,
},
shadowDown:{
  shadowColor: '#4D4D4D',
  shadowOffset: { height: 4 },
  shadowOpacity: 0.25,
  shadowRadius: 4,
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
  loadingBarContainer:{
    top: 21,
    left: 30,
    width: 370, 
    height: 55, 
    backgroundColor: 'white', 
    borderRadius: 27.50
  },
  loadingBar:{
    width: 185, 
    height: 55, 
    backgroundColor: '#005FEE', 
    borderRadius: 25.50
  },
  descript:{
    top: 82,
    left: 24,
    width: 382, 
    color: 'black', 
    fontSize: 20, 
    fontFamily: 'Nunito', 
    fontWeight: '700', 
    lineHeight: 22, 
    wordWrap: 'break-word'
  }
});

export default Home;