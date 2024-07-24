import { View, StyleSheet, ScrollView, Pressable, Text, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import FilteredJobs from '../components/filteredJobs';

const DetailsScreen = ({ route, navigation, onPress }) => {
    const { selectedOptions } = route.params;

    const cardsData = [
        {
            category: "Computers",
            jobs: [
                {
                    titleJob: "Specific job",
                    descriptionJob: "This is a description for a specific job",
                    imageURIJob: require('../../assets/images/icon.png'),
                    imageURIcard: require("../../assets/images/temporary2.png"),
                    description: "Computer programming is the process of designing and writing instructions for computers to perform specific tasks or solve problems.",
                    salaryRange: "79K - $140K"
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
    ];

    const selectedData = selectedOptions
        .map(option => cardsData.find(card => card.category === option))
        .filter(card => card !== undefined); 

    return (
        <View style={{ backgroundColor: "#D8DEE9",}}>
            <ScrollView contentContainerStyle={styles.container}>
                <Pressable onPress={() => navigation.goBack('Home')} >
                    <Text>Back to Home</Text>
                </Pressable>
                {(selectedData.flatMap(option => option.jobs)).map((job, index) => (
                    <FilteredJobs
                        onPress = {() => navigation.navigate('SpecificJobs', { job })}
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
        left: 19,
        backgroundColor: '#D8DEE9',
    },

});

export default DetailsScreen;
