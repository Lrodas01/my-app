import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const SpecificJobs = ({ route, navigation }) => {
  const { job } = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.imageContainer} source={job.imageURIcard} />

      <Text
        style={{
          position: "absolute",
          left: 140,
          top: 46,
          fontSize: 30,
          fontWeight: 700,
          color: "white",
        }}
      >
        You Chose :
      </Text>
      <View style={styles.jobText}>
        <Text style={styles.jobTextTitle}>{job.titleJob}</Text>
      </View>
            <Pressable
        style={{ position: "absolute" }}
        onPress={() => navigation.goBack("Details")}
      >
        <Image
          style={{ width: 35, height: 35 }}
          source={require("../../assets/images/back.png")}
        />
      </Pressable>
      <View style={[styles.jobInformation, styles.shadowProp]}>
        <Text style={styles.titleDescription}> What is {job.titleJob} </Text>
        <Text style={styles.description}>{job.descriptionJob}</Text>
      </View>
      <View style={[styles.benefits, styles.shadowProp]}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 700,
            textAlign: "center",
            top: 9,
            fontFamily: "Nunito",
          }}
        >
          Benefits
        </Text>
      </View>
      <View style={[styles.benefitsDescription, styles.shadowProp]}>
        <Text style={{ textAlign: "center", top: 9 }}>Average Salaries</Text>
        <Text style={{ textAlign: "center", top: 79 }}>{job.salaryRange}</Text>
      </View>
      <View style={[styles.benefitsDescription2, styles.shadowProp]}>
        <Text style={{ textAlign: "center", top: 9 }}>Skills Acquired</Text>
        <Text style={{ textAlign: "center", top: 10 }}>{job.skills}</Text>
      </View>
      <View style={[styles.colleges, styles.shadowProp]}>
        <Text
          style={styles.collegeText}
        >
          What Colleges offer it? 
        </Text>
      </View>
      {/* <ScrollView></ScrollView> */}
      <View style = {styles.collegeBox}>
          {/* Component???? */}
      </View>
      <View style = {styles.footer}>
          <Pressable style = {styles.homeButton}>
            <Ionicons name = 'home-outline' size={25} color = 'white'></Ionicons>
          </Pressable>
          <Pressable style = {styles.searchButton}>
            <Image style = {styles.searchImageButton} source = {require('../../assets/images/searchButton.png')}/>
          </Pressable>
          <Pressable style = {styles.mockInterviewButton} onPress={() => navigation.navigate('Interviews')}>
            <Ionicons name = 'chatbox-ellipses-outline' size={25} color = 'white'></Ionicons>
          </Pressable>
      </View>
    </View>
  );
};

export default SpecificJobs;

const styles = StyleSheet.create({

  jobTextTitle:{
  height: 34, 
  textAlign: 'center', 
  color: 'white', 
  fontSize: 25, 
  fontFamily: 'Nunito', 
  fontWeight: '900', 
  wordWrap: 'break-word',
  bottom: 60,
  },
  imageContainer: {
    width: 430, 
    height: 152, 
    borderBottomLeftRadius: 8, 
    borderBottomRightRadius: 8
  },
  jobInformation: {
  left: 50,
  width: 330, 
  height: 140, 
  paddingLeft: 10, 
  paddingRight: 10, 
  backgroundColor: 'white', 
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', 
  borderRadius: 8, 
  flexDirection: 'column', 
  justifyContent: 'flex-start', 
  alignItems: 'center', 
  gap: 15, 
  display: 'inline-flex'
  },
  titleDescription: {
  width: 310, 
  textAlign: 'center', 
  color: 'black', 
  fontSize: 18, 
  fontFamily: 'Nunito', 
  fontWeight: '600', 
  textDecoration: 'underline', 
  lineHeight: 25, 
  wordWrap: 'break-word'
  },
  description: {
  width: 310, 
  textAlign: 'center', 
  color: '#808080', 
  fontSize: 17, 
  fontFamily: 'Nunito', 
  fontWeight: '500', 
  lineHeight: 25, 
  wordWrap: 'break-word'
  },
  benefits: {
    top: 9,
    left: 74,
    width: 282, 
    height: 43, 
    backgroundColor: '#FEFEFE',  
    borderRadius: 7
  },
  benefitsDescription: {
    top: 61,
    width: 132, 
    height: 125, 
    backgroundColor: '#FEFEFE', 
    borderRadius: 7,
    left: 70,
  },
  benefitsDescription2: {
    bottom: 63,
    width: 132, 
    height: 125, 
    backgroundColor: '#FEFEFE', 
    borderRadius: 7,
    left: 230,
  },
  colleges: {
    bottom: 30,
    left: 51,
    width: 328, 
    height: 43, 
    backgroundColor: '#FEFEFE', 
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', 
    borderRadius: 7
  },
  collegeText:{
    top: 9,
    textAlign: 'center', 
    color: 'black', 
    fontSize: 18, 
    fontFamily: 'Nunito', 
    fontWeight: '600', 
    textDecoration: 'underline', 
    lineHeight: 25, 
    wordWrap: 'break-word'
  },
  collegeBox:{
    width: 114, 
    height: 103, 
    backgroundColor: '#FEFEFE',  
    borderRadius: 7
  },
  shadowProp:{
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  homeButton:{
    top: 29,
    left: 61,
  },
    searchButton:{
    width: 20,
    height: 20,
    left: 204,
  },
  mockInterviewButton:{
    left: 343,
    bottom: 20,
  },
  footer: {
    top: 0,
    width: 430, 
    height: 74, 
    backgroundColor: '#005FEE', 
    borderRadius: 8,
  },

});
