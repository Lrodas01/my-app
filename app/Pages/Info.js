import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Filtered from '../components/filteredJobs';

const Info = () => {



  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    {jobsData.map((card, index) => (
      <Filtered
        key={index}
        titleText={card.jobName}
        descriptionText={card.jobDescription}
        image={card.imageURI}
      />
    ))}
  </ScrollView>
  )
}

export default Info

const styles = StyleSheet.create({
    
})