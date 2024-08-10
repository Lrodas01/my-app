import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
  ImageBackground,
  LogBox
} from "react-native";
import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colleges from "../components/colleges";
import { AppContext } from "../AppContext";
import Footer from "../components/Home Page Components/footer";
import Benefits from "../components/benefits";
import { useLocalSearchParams } from "expo-router";

const SpecificJobs = ({ route, navigation }) => {

  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications
  const { cardsData } = useContext(AppContext);

  const { job, colleges, collegesImage, jobs, interns, benefits, website } = route.params;

    console.log ('Websites passing in SpecificJobs', {website})
  // console.log(route.params);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageContainer} source={job.imageURIcard}>
        <View style={styles.jobText}>
          <Text style={styles.jobTextTitle}>{job.titleJob}</Text>
        </View>
      </ImageBackground>

      <Pressable
        style={{ position: "absolute" }}
        onPress={() => navigation.goBack("Details")}
      >
        <Image
          style={{ width: 35, height: 35, top: 21, left: 28 }}
          source={require("../../assets/images/back.png")}
        />
      </Pressable>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={[styles.jobInformation]}>
          <Text style={styles.titleDescription}> What is {job.titleJob} </Text>
          <Text style={styles.description}>{job.descriptionJob}</Text>
        </View>
        <View style={styles.benefitsContainer}>
          <Text style={styles.benefitsText}>Benefits</Text>

          <View style={styles.benefitsDescriptionContainer}>
            {/* //This is just a placeholder, I will make this display individual information*/}
            {/* <Benefits benefit = {'79K - 140K'} description={'How much would you make? '}/>
            <Benefits benefit= {'Opportunities'} description={'Higher chance for a Job'}/>
            <Benefits benefit={'Remote Work'} description={'Better chance to work from home.'}/> */}

            {benefits.map((benefit) =>(
              <Benefits
                title = {benefit.title}
                description={benefit.descripition}
              />
             ))}


          </View>
        </View>

        <View style={styles.collegeContainer}>
          <Text style={styles.collegeText}>
            What colleges recommend this career?{" "}
          </Text>

          <View style={{ flexDirection: "row", top: 110 }}>
            {colleges.map((college, index) => (
              <Colleges
                key={index}
                collegeName={college.collegeName}
                collegeImage={college.collegeImage}
              />
            ))}
          </View>
        </View>

        <View style={styles.programContainer}>
          <Text style={styles.programsText}>
            Programs or Interships to join (websites)
          </Text>
          <Pressable
            style={styles.programsButton}
            onPress={() => navigation.navigate("Programs", { job, interns, website })}
          >
            <View style={[styles.programsShownContainer, styles.shadowProp]}>
              <Text style={styles.programsTextContainer}>
                The programs that are recommended are for the best experience
                for networ...
              </Text>
              <Ionicons
                style={styles.arrowImage}
                name="arrow-forward-outline"
                size={50}
              ></Ionicons>
            </View>
          </Pressable>
        </View>
      </ScrollView>

      <Footer navigation={navigation} />
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
    paddingBottom: 200,
  },
  jobText: {
    position: "absolute",
    top: 0,
    bottom: 50,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  jobTextContainer: {},
  jobTextTitle: {
    top: 32,
    color: "white",
    fontSize: 20,
    fontFamily: "Nunito",
    fontWeight: "900",
    textTransform: "uppercase",
    wordWrap: "break-word",
  },
  imageContainer: {
    backgroundColor: "transparent",
    width: "100%",
    height: 152,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  jobInformation: {
    top: 20,
    width: 432,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 11,
    paddingBottom: 31,
    borderRadius: 8,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 8,
    display: "inline-flex",
  },
  titleDescription: {
    width: 310,
    color: "black",
    fontSize: 18,
    fontFamily: "Nunito",
    fontWeight: "600",
    textDecoration: "underline",
    lineHeight: 25,
    wordWrap: "break-word",
  },
  description: {
    width: 384,
    color: "#808080",
    fontSize: 16,
    fontFamily: "Nunito",
    fontWeight: "500",
    lineHeight: 25,
    wordWrap: "break-word",
  },
  benefitsContainer: {
    top: 22,
    width: 431,
    height: 224,
    backgroundColor: "#040404",
  },
  benefits: {
    top: 9,
    left: 74,
    width: 282,
    height: 43,
    backgroundColor: "#FEFEFE",
    borderRadius: 7,
  },
  benefitsDescriptionContainer: {
    top: 24,
    flexDirection: "row",
  },
  collegeContainer: {
    top: 30,
    backgroundColor: "white",
    width: 386,
    height: 152,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 6,
    display: "inline-flex",
  },
  collegeText: {
    top: 24.5,
    left: 26.5,
    textAlign: "center",
    color: "black",
    fontSize: 18,
    fontFamily: "Nunito",
    fontWeight: "700",
    wordWrap: "break-word",
  },
  collegesImagesContainer: {
    width: 50,
    height: 50,
    position: "absolute",
  },
  collegeBox: {
    width: 114,
    height: 103,
    backgroundColor: "#FEFEFE",
    borderRadius: 7,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  programContainer: {
    top: 76,
    left: 24,
    width: 332,
    color: "black",
    fontSize: 18,
    fontFamily: "Nunito",
    fontWeight: "700",
    wordWrap: "break-word",
  },
  programsContainer: {
    left: 46,
    bottom: 0,
    width: 334,
    height: 36,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "white",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    display: "inline-flex",
  },
  programsText: {
    width: 332,
    color: "black",
    fontSize: 18,
    fontFamily: "Nunito",
    fontWeight: "700",
    wordWrap: "break-word",
  },
  programsShownContainer: {
    left: 0,
    bottom: 30,
    width: 376,
    height: 82,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "white",
    borderRadius: 7,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 12,
    display: "inline-flex",
  },
  programsTextContainer: {
    top: 5,
    right: 30,
    width: 288,
    height: 44,
    color: "black",
    fontSize: 15,
    fontFamily: "Nunito",
    fontWeight: "700",
    wordWrap: "break-word",
  },
  programsButton: {
    top: 50,
  },
  arrowImage: {
    position: "absolute",
    bottom: 15,
    left: 303,
  },
  benefitsText: {
    top: 26,
    left: 23,
    width: 398,
    color: "white",
    fontSize: 18,
    fontFamily: "Nunito",
    fontWeight: "700",
    wordWrap: "break-word",
  },
  salaryBox: {
    top: 24,
    left: 23,
    width: 122,
    height: 122,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 6,
    paddingBottom: 6,
    backgroundColor: "white",
    borderRadius: 8,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 24,
    display: "inline-flex",
  },
  descriptionSalary: {
    bottom: 20,
    width: 106,
    color: "#555555",
    fontSize: 12,
    fontFamily: "Nunito",
    fontWeight: "500",
    wordWrap: "break-word",
  },
  titleSalary: {
    width: 106,
    height: 22,
    color: "#005FEE",
    fontSize: 20,
    fontFamily: "Nunito",
    fontWeight: "500",
    lineHeight: 25,
    wordWrap: "break-word",
  },
  opportunities: {
    width: 122,
    height: 122,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 6,
    paddingBottom: 6,
    backgroundColor: "white",
    borderRadius: 8,
    border: "1px solid",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 24,
    display: "inline-flex",
  },
});
