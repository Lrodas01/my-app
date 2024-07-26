import { View, StyleSheet, ScrollView, Pressable, Text, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import FilteredJobs from '../components/filteredJobs';
import { Ionicons } from '@expo/vector-icons';

const DetailsScreen = ({ route, navigation, onPress }) => {
    const { selectedOptions } = route.params;

    const cardsData = [
        {
            category: "Computers",

            jobs: [
                {
                    titleJob: "Computer Programming",
                    descriptionJob: "Computer programming is the process of designing and writing instructions for computers to perform specific tasks or solve problems.",
                    imageURIJob: require('../../assets/images/icon.png'),
                    imageURIcard: require("../../assets/images/temporary2.png"),
                    description: "Computer programming is the process of designing and writing instructions for computers to perform specific tasks or solve problems.",
                    salaryRange: "79K - $140K",
                    colleges: ["Colleges A", "Colleges B ", "Colleges C"],
                },
                {
                    titleJob: "Another job",
                    descriptionJob: "This is another description for a job",
                    imageURIJob: require('../../assets/images/icon.png'),
                    description: "",
                },
                {
                    titleJob: "Another Third job",
                    descriptionJob: "This is another description for a job",
                    imageURIJob: require('../../assets/images/icon.png'),
                    description: "",
                },
                {
                    titleJob: "Another Fourth job",
                    descriptionJob: "This is another description for a job",
                    imageURIJob: require('../../assets/images/icon.png'),
                    description: "",
                },
            ],
            titleText: "Computers",
            descriptionText: "This is a description for computers",
            imageURI: require('../../assets/images/computer.png'),
        },
        {
            category: "Medical",
            jobs: [
                {
                    titleJob: "Medical job 1",
                    descriptionJob: "This is a description for a medical job",
                    imageURIJob: require('../../assets/images/medical.webp'),
                },
                {
                    titleJob: "Medical job 2",
                    descriptionJob: "This is another description for a medical job",
                    imageURIJob: require('../../assets/images/medical.webp'),
                }
            ],
            titleText: "Medical",
            descriptionText: "This is a description for medical",
            imageURI: require('../../assets/images/medical.webp'),
        },
        {
            category: "Finance",
            jobs: [
                {
                    titleJob: "Finance job 1",
                    descriptionJob: "This is a description for a finance job",
                    imageURIJob: require('../../assets/images/finance.jpg'),
                }
            ],
            titleText: "Finance",
            descriptionText: "This is a description for finance",
            imageURI: require('../../assets/images/finance.jpg'),
        },
        {
            category: "Kinesiology",
            jobs: [
                {
                    titleJob: "Kinesiology job 1",
                    descriptionJob: "This is a description for a kinesiology job",
                    imageURIJob: require('../../assets/images/physical.webp'),
                }
            ],
            titleText: "Kinesiology",
            descriptionText: "This is a description for kinesiology",
            imageURI: require('../../assets/images/physical.webp'),
        },
        { name: 'Liam Mitchel', time: '9:00AM' },
        { name: 'Emma Johnson', time: '10:00AM' },
        { name: 'Oliver Smith', time: '11:00AM' },
        { name: 'Ava Brown', time: '12:00PM' },
        
    ];

    const selectedData = selectedOptions
        .map(option => cardsData.find(card => card.category === option))
        .filter(card => card !== undefined); 

    return (
        <View style = {{backgroundColor: 'white',}}>
            <View style = {[styles.header, {backgroundColor: '#005FEE',}]}>
                <Text style = {styles.headerText}>These are the options based on your answers (:</Text>
            </View>
            <ScrollView contentContainerStyle={styles.container}>
        <View style = {[{flexDirection: 'row-reverse'}, styles.shadowProp ]}>
            <View style = {[styles.filterIcon, { backgroundColor: 'white', marginTop: 30, marginBottom: 10, marginEnd:44}]}>
                <Ionicons name = 'funnel-outline' size={35}></Ionicons>
            </View>
        </View>
                <Pressable onPress={() => navigation.goBack('Home')} >
                    <Text>Back to Home</Text>
                </Pressable>
                {(selectedData.flatMap(option => option.jobs)).map((job, index) => (
                    <FilteredJobs
                        onPress = {() => navigation.navigate('SpecificJobs', { job, colleges: job.colleges })}
                        key={index}
                        jobName={job.titleJob}
                        jobDescription={job.descriptionJob}
                        image={job.imageURIJob}
                    />
                ))}
            </ScrollView>
            
        </View>
    );
};

const styles = StyleSheet.create({
container: {
    left: 27,
    paddingBottom: 100,
    backgroundColor: 'white'
},
header:{
    height: 100, 
    paddingLeft: 24, 
    paddingRight: 24, 
    paddingTop: 16, 
    paddingBottom: 16, 
    background: '#005FEE', 
    borderBottomLeftRadius: 8, 
    borderBottomRightRadius: 8, 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 10, 
    display: 'inline-flex'
},
headerText: {
    width: 345, 
    color: 'white', 
    fontSize: 25, 
    fontFamily: 'Nunito', 
    fontWeight: '700', 
    wordWrap: 'break-word'
},
filterIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50, 
    height: 50, 
    position: 'relative', 
    borderRadius: 7, 
    overflow: 'hidden' 
},
shadowProp:{
    shadowColor: '#171717',
    shadowOffset: { height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
},
filterInside: {
    width: 33.34, 
    height: 37.51, 
    left: 8.33, 
    top: 6.25, 
    position: 'absolute', 
    background: '#16BF82'
}
});

export default DetailsScreen;
