import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import FilteredJobs from '../components/filteredJobs';

const DetailsScreen = ({ route }) => {
    const { selectedOptions } = route.params;
  
    // Assuming you have a cardsData array in DetailsScreen as well to map the selected titles to detailed data
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
  
    const selectedData = selectedOptions.map(option => cardsData.find(card => card.titleText === option));
  
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {selectedData.map((option, index) => (
          <FilteredJobs
            key={option.titleText}
            jobName={option.titleText}
            jobDescription={option.descriptionText}
            image={option.imageURI}
          />
        ))}
      </ScrollView>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#fff',
    },
    detailContainer: {
      marginBottom: 20,
    },
  });
  
  export default DetailsScreen;