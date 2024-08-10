import { Pressable, StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import Interests from "../../components/Home Page Components/interests";
import Internships from "../../components/Home Page Components/internships";
import Recent from "../../components/Home Page Components/recent";
import Footer from "../../components/Home Page Components/footer";
import { AppContext } from "../../AppContext";

const ActualHome = ({ navigation, route }) => {
  const { cardsData, recentJobs, selectedCategories, addRecentJob } = useContext(AppContext);

  const handleSelectInterest = (job) => {
    addRecentJob(job);

    // console.log("\nThis is cards Data\n", cardsData[0].jobs);
    // console.log("These are the keys", Object.keys(cardsData[0]));
    navigation.navigate("SpecificJobs", {
      job,
      colleges: job.colleges,
      collegesImage: job.collegesImage,
      jobs: cardsData[0].jobs
    });
  };

  // const { selectedOptions } = route.params || { selectedOptions: [] };
  const selectedOptions = selectedCategories;
  // const { selectedOptions } = route.params;
  // console.log('ROUTE PARAMS: ', route.params )

  // console.log({selectedOptions})

  // console.log("Selected catergories in Search.js: ", selectedCategories);

  
  // console.log("\nThese are the jobs\n", recentJobs);

  // console.log("Selected Options keys: ", Object.keys(selectedOptions));
  

  const selectedData = selectedOptions
      .map(option => cardsData.find(card => card.category === option))
      .filter(card => card !== undefined); 

  const handleSelectJob = (job) => {
      addRecentJob(job);
      navigation.navigate('SpecificJobs', { job, colleges: job.colleges, jobs: cardsData[0].jobs, interns: job.internships, benefits: job.benefits, website: job.websites });
  };

  
  return (
    <View style={styles.container}>
      <View contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Home</Text>
          <Pressable style={styles.funnel} onPress = {() => navigation.navigate('Home')}>
          <Ionicons
            name="funnel-outline"
            size={36}
            color={"white"}
          />
          </Pressable>
        </View>
        <View>
          <Text style={styles.exploreText}>Explore</Text>
        </View>
          <View style = {{flexDirection: "row"}}>
            <Pressable style  = {[styles.resumeButton, styles.shadowProp]}  onPress = {()=> navigation.navigate('No') }>
              <Text style = {styles.resumeButtonText}>Making a resume</Text>
              <Image style = {{bottom: 11, left: 5}} source = {require('../../../assets/icons-black/resume.png')}/>
            </Pressable>
          </View>
        <View style={styles.recentContainer}>
          <Text style={styles.recentText}>Based off of your preferences...</Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={[styles.scrollContent, styles.recentContent]}
          >
                {(selectedData.flatMap(option => option.jobs)).map((job, index) => (
                    <Recent
                        onPress = {() => handleSelectJob(job)}
                        key={index}
                        jobName={job.titleJob}
                        jobDescription={job.descriptionJob}
                        image={job.imageURIJob}
                    />
                ))}
          </ScrollView>
        </View>
        <View style={styles.intershipContainer}>
          <Text style={styles.intershipText}>Interships for you</Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal //This makes my scrollable horizontal yipeee!!!
            contentContainerStyle={[styles.scrollContent]}
          >
            <View style={styles.scrollableItem}>
              <Internships internshipsName={'Google'} internshipsImage={require('../../../assets/interships/google.png')}/>
            </View>
            <View style={styles.scrollableItem}>
              <Internships internshipsName={'NASA‎ ‎ ‎ '} internshipsImage={require('../../../assets/interships/nasa.png')}/>
            </View>
            <View style={styles.scrollableItem}>
              <Internships internshipsName={'Microsoft'} internshipsImage={require('../../../assets/interships/microsoft.png')}/>
            </View>
          </ScrollView>
        </View>
        <View style={styles.careerContainer}>
          <Text style={styles.careerText}>Popular Career Interests</Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={[styles.scrollContent]}
          >
            <View style={[styles.scrollableItem, { flexDirection: "row" }]}>
              {cardsData
                .flatMap((option) => option.jobs)
                .map((job, index) => (
                  <Interests
                    onPress={() => handleSelectInterest(job)}
                    key={index}
                    jobName={job.titleJob}
                    image={job.imageURIJob}
                  />
                ))}
            </View>
          </ScrollView>
        </View>
      </View>
      <Footer navigation = {navigation} selectedOptions = {selectedOptions}/>
      <Image style = {styles.home} source = {require('../../../assets/footer/homeOn.png')} />
    </View>
  );
};

export default ActualHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    height: '100%'
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 80, // To make space for the footer
  },
  funnel: {
    position: "absolute",
    right: 24,
  },
  scrollContent: {
    paddingRight: 48,
    height: "auto",
  },
  header: {
    width: "100%",
    height: 68,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#005FEE",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    textAlign: "center",
    color: "white",
    fontSize: 25,
    fontFamily: "Nunito",
    fontWeight: "700",
  },
  exploreText: {
    marginLeft: 29,
    color: "black",
    fontSize: 25,
    fontFamily: "Nunito",
    fontWeight: "700",
  },
  resumeButton:{
    left: 29,
    top:  7,
    width: 148, 
    height: 77, 
    backgroundColor: 'white', 
    borderRadius: 7
  },
  resumeButtonText:{
    left: 70,
    top: 24,
    textAlign: 'center', 
    color: 'black', 
    fontSize: 12, 
    fontFamily: 'Nunito', 
    fontWeight: '400', 
    lineHeight: 12, 
    wordWrap: 'break-word',
    width:  53,
    height: 24,
  },
  permitButton:{
    top: 7,
    left: 101,
    width: 148, 
    height: 77, 
    backgroundColor: 'white',
    borderRadius: 7
  },
  permitButtonText:{
    width: 96, 
    left: 54,
    top: 21,
    textAlign: 'center', 
    color: 'black', 
    fontSize: 12, 
    fontFamily: 'Nunito', 
    fontWeight: '400', 
    wordWrap: 'break-word'
  },
  shadowProp:{
    shadowColor: '#171717',
    shadowOffset: { height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  recentText: {
    left: 45,
    bottom: 10,
    color: "black",
    fontSize: 25,
    fontFamily: "Nunito",
    fontWeight: "700",
  },
  recentContainer: {
    marginTop: 33,
    marginLeft: -20,
    marginRight: 0,
  },
  recentContent: {
    marginTop: 18,
    paddingRight: 48,
    height: "auto",
  },
  intershipContainer: {
    marginTop: 20,
    marginLeft: -20,
    marginRight: 0,
  },
  intershipText: {
    left: 45,
    bottom: 10,
    color: "black",
    fontSize: 25,
    fontFamily: "Nunito",
    fontWeight: "700",
  },
  careerContainer: {
    marginTop: 20,
    marginLeft: -20,
    marginRight: 0,
    marginBottom: 20,
  },
  careerText: {
    left: 45,
    bottom: 10,
    color: "black",
    fontSize: 25,
    fontFamily: "Nunito",
    fontWeight: "700",
  },
  home:{
    position: 'absolute',
    width: 22,
    height: 22,
    left: 61,
    bottom: 26,
    
  },

  scrollableItem: {},
});

//call AppContext, which would hold the categories, 
