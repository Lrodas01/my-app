import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colleges from "../components/colleges";
import { AppContext } from "../AppContext";

const SpecificJobs = ({ route, navigation }) => {

  const { job, colleges } = route.params;
  

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
      <ScrollView contentContainerStyle={styles.scrollContent}> 
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
          <Text style={styles.collegeText}>What Colleges offer it?</Text>
        </View>
        <View style={{ flexDirection: 'row'}}> 
          {colleges.map((college, index) => (
            <Colleges key={index} test={college} />
          ))}
        </View>

        <Pressable onPress = {() => navigation.navigate('Programs', {job})}>
        <View style={[styles.programsContainer, styles.shadowProp]}>
          <Text style={styles.programsText}>Programs or Internships to join</Text>
        </View>
        <View style={[styles.programsShownContainer, styles.shadowProp]}>
          <Text style = {styles.programsTextContainer}>
          The programs that are recommended are for the best experience for networ...</Text>
          <Ionicons style = {styles.arrowImage} name = 'arrow-forward-outline' size = {50}></Ionicons>
        </View>
        </Pressable>
      </ScrollView>

      
      <View style={styles.footer}>
        <Pressable style={styles.homeButton} onPress={() => navigation.navigate('ActualHome')}>
          <Ionicons name='home-outline' size={25} color='white'></Ionicons>
        </Pressable>
        <Pressable style={styles.searchButton}>
          <Image style={styles.searchImageButton} source={require('../../assets/images/searchButton.png')} />
        </Pressable>
        <Pressable style={styles.mockInterviewButton} onPress={() => navigation.navigate('Interviews')}>
          <Ionicons name='chatbox-ellipses-outline' size={25} color='white'></Ionicons>
        </Pressable>
      </View>
    </View>
  );
};

export default SpecificJobs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    paddingBottom: 80, // Adjust padding to change footer?
  },
  jobTextTitle: {
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
    width: '100%',
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
    textDecorationLine: 'underline',
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
    top: 21,
    width: 132,
    height: 125,
    backgroundColor: '#FEFEFE',
    borderRadius: 7,
    left: 70,
  },
  benefitsDescription2: {
    bottom: 103,
    width: 132,
    height: 125,
    backgroundColor: '#FEFEFE',
    borderRadius: 7,
    left: 230,
  },
  colleges: {
    bottom: 91,
    left: 51,
    width: 328,
    height: 43,
    backgroundColor: '#FEFEFE',
    borderRadius: 7
  },
  collegeText: {
    top: 9,
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontFamily: 'Nunito',
    fontWeight: '600',
    textDecorationLine: 'underline',
    lineHeight: 25,
    wordWrap: 'break-word'
  },
  collegeBox: {
    width: 114,
    height: 103,
    backgroundColor: '#FEFEFE',
    borderRadius: 7
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  programsContainer: {
    left: 46,
    bottom: 45,
    width: 334,
    height: 36,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    display: 'inline-flex'
  },
  programsText: {
    height: 22,
    width: 332,
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontFamily: 'Nunito',
    fontWeight: '700',
    wordWrap: 'break-word'
  },
  programsShownContainer: {
    left: 26,
    bottom: 30,
    width: 376,
    height: 82,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: 'white',
    borderRadius: 7,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 12,
    display: 'inline-flex'
  },
  programsTextContainer:{
    top: 5,
    right: 30,
    width: 288, 
    height: 44, 
    color: 'black', 
    fontSize: 15, 
    fontFamily: 'Nunito', 
    fontWeight: '700', 
    wordWrap: 'break-word'
  },
  arrowImage:{
    position:'absolute',
    bottom: 15,
    left: 303,
  },
  homeButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButton: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchImageButton: {
    width: 20,
    height: 20,
  },
  mockInterviewButton: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 74,
    flexDirection: 'row', 
    backgroundColor: '#005FEE',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
   homeButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButton: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchImageButton: {
    width: 20,
    height: 20,
  },
  mockInterviewButton: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 74,
    flexDirection: 'row', 
    backgroundColor: '#005FEE',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

});
