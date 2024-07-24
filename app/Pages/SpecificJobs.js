import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const SpecificJobs = ({ route }) => { 
    const { job } = route.params; 

    return (
        <View style={styles.container}>
                <Image style={styles.imageContainer} source={job.imageURIcard} />
                <Text style = {{position:'absolute', left: 140, top: 46, fontSize: 30, fontWeight: 700, color:'white',}}>You Chose :</Text>
            <View style={styles.jobText}>
                <Text style={styles.jobText}>{job.titleJob}</Text>
            </View>
            <View style={styles.jobInformation}>
                <Text style={styles.titleDescription}> What is {job.titleJob} </Text> 
                <Text style={styles.description}>{job.descriptionJob}</Text> 
            </View>
            <View style={styles.benefits}>
            <Text style = {{fontSize: 18, fontWeight: 700, textAlign: 'center', top: 9, fontFamily: 'Nunito',}}>Benefits</Text>
            </View>
            <View style={styles.benefitsDescription}>
                <Text style = {{textAlign: 'center', top: 9, }}>Average Salaries</Text>
                <Text style = {{textAlign: 'center', top: 79, }}>{job.salaryRange}</Text>
            </View>
            <View style={styles.benefitsDescription2}>
                <Text style = {{textAlign: 'center', top: 9, }}>Skills Acquired</Text>
                <Text style = {{textAlign: 'center', top: 10, }}>{job.skills}</Text>
            </View>
            <View style={styles.colleges}>
                <Text style = {{fontSize: 18, fontWeight: 700, textAlign: 'center', top: 9, fontFamily: 'Nunito',}}>Colleges that offer {job.titleJob}</Text>
            </View>
            <ScrollView>
                
            </ScrollView>
        </View>
    );
}

export default SpecificJobs;

const styles = StyleSheet.create({
    container: {
    },
    jobText: {
        alignItems: 'center',
        bottom: 25,
        fontSize: 25,
        fontWeight: 900,
        fontFamily: 'Nunito',
        color: 'white',
    },
    imageContainer:{
        width: 430,
    },
    jobInformation:{
        top: 185,
        left: 49,
        position: 'absolute',
        height: 160,
        width: 332,
        backgroundColor: '#fff',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 7,

    },
    titleDescription:{
        textAlign: 'center',
        top: 15,
        fontSize: 18,
    },
    description:{
        margin: 7,
        textAlign: 'center',
        top: 25,
        fontSize: 17,
    },
    benefits:{
        top: 354,
        left: 78,
        position: 'absolute',
        height: 43,
        width: 282,
        backgroundColor: '#fff',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 7,
    },
    benefitsDescription:{
        position: 'absolute',
        top: 408,
        left: 52,
        width: 132,
        height: 125,
        backgroundColor: '#fff',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 7,
    },
    benefitsDescription2:{
        position: 'absolute',
        top: 408,
        left: 209,
        width: 132,
        height: 125,
        backgroundColor: '#fff',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 7,
    },
    colleges:{
        alignSelf: 'center',
        top: 374,
        height: 43,
        width: 341,
        backgroundColor: '#fff',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 7,
    },
})