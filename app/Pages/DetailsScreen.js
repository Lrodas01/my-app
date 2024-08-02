import { View, StyleSheet, ScrollView, Pressable, Text, TextInput } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import FilteredJobs from '../components/filteredJobs';
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from '../AppContext';

const DetailsScreen = ({ route, navigation, onPress }) => {
    const { selectedOptions } = route.params;
    const { cardsData, addRecentJob } = useContext(AppContext);

    const selectedData = selectedOptions
        .map(option => cardsData.find(card => card.category === option))
        .filter(card => card !== undefined); 

    const handleSelectJob = (job) => {
        addRecentJob(job);
        navigation.navigate('SpecificJobs', { job, colleges: job.colleges, jobs: cardsData[0].jobs });
    };

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
                        onPress = {() => handleSelectJob(job)}
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
