import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Filtered from '../components/filteredJobs';


const DetailsScreen = ({ route, navigation }) => {
  const { selectedOptions } = route.params;

  const jobsData = [
    {
        jobType: '',
        jobName: '',
        jobDescription: '',
        jobImage: '',
    },
    {
        jobType: '',
        jobName: '',
        jobDescription: '',
        jobImage: '',
    },
    {
        jobType: '',
        jobName: '',
        jobDescription: '',
        jobImage: '',
    },
    {
        jobType: '',
        jobName: '',
        jobDescription: '',
        jobImage: '',
    },
    {
        jobType: '',
        jobName: '',
        jobDescription: '',
        jobImage: '',
    },
    {
        jobType: '',
        jobName: '',
        jobDescription: '',
        jobImage: '',
    },
  ]
  

  return (
    < >
    <Pressable onPress={() => navigation.replace('Home')}>
        <Text>Go back</Text>
    </Pressable>
    <Pressable style={styles.container} onPress={() => navigation.replace('Info')} >
      <Text style={styles.title}>Selected Options:</Text>
      {selectedOptions.map((option, index) => (
        <Text key={index} style={styles.option}>{option}</Text>
      ))}
    </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  option: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default DetailsScreen;