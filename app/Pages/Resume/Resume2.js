import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'

const Resume2 = ({navigation}) => {
  return (
<View  style = {styles.container}>
    <View style={styles.header}>
    <Pressable onPress={()=>navigation.goBack('')} style = {styles.backButton}>
        <Ionicons name = 'chevron-back-outline' color={'white'} size={50}/>
      </Pressable>
      <Text style = {styles.headerText}>Resume for Dummies</Text>
    </View>
    <View style = {[styles.loadingBarContainer, styles.shadowProp]}>
        <View style = {styles.loadingBar}>
        <Text style = {[styles.loadingBarText, {color: 'white'}]}>res</Text><Text style = {[styles.loadingBarText, {left:185.5}]}>ume</Text>

        </View>
    </View>
    <View style = {{height: 20}}>

    </View>

    <ScrollView contentContainerStyle={{paddingBottom: 100,}}>
        <View>
            <Text style = {styles.titleNumber}>2. Gather information</Text>
        </View>
        <View>
            <Text style = {{position: 'absolute', fontSize: 50, left: 15, top: 19}}>{`\u2022`}</Text>
            <Text style = {styles.description}>Contact Information: Your full name, phone number, email address, and LinkedIn profile (optional).</Text>
            <Text style = {{position: 'absolute', fontSize: 50, left: 15, top: 179}}>{`\u2022`}</Text>
            <Text style = {[styles.description, {top: 70,}]}>Professional Summary or Objective: A brief statement that highlights your career goals and key qualifications.</Text>
            <Image style = {{top: 130, left: 23,}} source={require('../../../assets/icons-black/quote.png')}/>
                <Text style = {styles.descriptionTwo}>Highly motivated software developer with 5+ years of experience in developing robust code for high-volume businesses. Skilled in Java, Python, and web development. Seeking to leverage expertise to join ABC Company as a lead software developer.
                </Text>
            <Image style = {{top: 110, left: 374}} source={require('../../../assets/icons-black/downQoute.png')}/>
            <Text style = {{position: 'absolute', fontSize: 50, left: 15, top: 585}}>{`\u2022`}</Text>
            <Text style = {[styles.descriptionThree, {top: 140,}]}>Work Experience: Job titles, company names, locations, dates of employment, and bullet points of key responsibilities and achievements.</Text>
            <Text style = {styles.descriptionFour}>Example: Software Developer</Text>
            <Text style = {styles.descriptionFive}>       XYZ Corporation, New York, NY </Text>
            <Text style = {styles.descriptionFive}>       June 2018 - Present </Text>
            <Text style = {styles.descriptionFive}>       - Developed and maintained web applications using Java and Spring Boot.       </Text>
            <Text style = {styles.descriptionFive}>        - Improved application performance by 30% through code optimization and refactoring. </Text>
            <Text style = {styles.descriptionFive}>        - Led a team of 5 developers in the successful implementation of a new e-commerce platform. </Text>

            <Text style = {{position: 'absolute', fontSize: 50, left: 15, top: 1043}}>{`\u2022`}</Text>
            <Text style = {[styles.descriptionThree, {bottom: 50, }]}>Education: Schools attended, degrees obtained, majors, and graduation dates.</Text>
                <Text style = {[styles.descriptionFive, {bottom: 45, left: 77} ]}>Bachelor of Science in Computer Science</Text>
                <Text style = {[styles.descriptionFive, {bottom: 45, left: 77}]}>University of ABC, Anytown, USA</Text>
                <Text style = {[styles.descriptionFive, {bottom: 45, left: 77}]}>Graduated May 2018</Text>
                <Text style = {[styles.descriptionFive, {bottom: 45, left: 77}]}>- Dean's List, 2016-2018</Text>
            <Text style = {{position: 'absolute', fontSize: 50, left: 15, top: 1282}}>{`\u2022`}</Text>
            <Text style = {[styles.descriptionThree, {bottom: 20, }]}>Skills: Relevant skills that match the job description.</Text>
                <Text style = {[styles.descriptionFive, {bottom: 5, left: 35} ]}>- Programming Languages: Java, Python, JavaScript</Text>
                <Text style = {[styles.descriptionFive, {bottom: 5, left: 35} ]}>- Web Development: HTML, CSS, React</Text>
                <Text style = {[styles.descriptionFive, {bottom: 5, left: 35} ]}>- Databases: MySQL, MongoDB</Text>
            <Text style = {{position: 'absolute', fontSize: 50, left: 15, top: 1482}}>{`\u2022`}</Text>
            <Text style = {[styles.descriptionSix, {top: 30,}]}>Additional Sections: Certifications, volunteer experience, projects, publications, professional affiliations, etc.</Text>
            <Text style = {[styles.descriptionFive, {top: 50, left: 74} ]}>Certified Java Developer, Oracle, 2019</Text>

        </View>



    </ScrollView>

    <View style = {[styles.footer, styles.shadowUp]}>
    <Pressable onPress = {() => navigation.navigate('Resume3')} style = {styles.buttonFooter}>
      <Text style = {styles.buttonText}>Next</Text>
      </Pressable>
    </View>
</View>    
  )
}

export default Resume2

const styles = StyleSheet.create({
    container:{
        height: '100%',
        backgroundColor: 'white'
    },
    header:{
        width: 430, 
        height: 82, 
        paddingLeft: 24, 
        paddingRight: 24, 
        paddingTop: 16, 
        paddingBottom: 16, 
        backgroundColor: '#005FEE', 
        borderBottomLeftRadius: 8, 
        borderBottomRightRadius: 8, 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: 10, 
        display: 'inline-flex'
    },
    backButton:{
      position: 'absolute',
      left: 0,
    },
    headerText:{
        width: 345, 
        color: 'white', 
        fontSize: 25, 
        fontFamily: 'Nunito', 
        fontWeight: '700', 
        wordWrap: 'break-word'
    },
    loadingBarContainer:{
        top: 5,
        left: 31,
        width: 370, 
        height: 34, 
        backgroundColor: 'white', 
        borderRadius: 27.50
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
      },
      shadowUp:{
        shadowColor: '#171717',
        shadowOffset: { height: -12 },
        shadowOpacity: 0.16,
        shadowRadius: 16,
      },
      loadingBarText:{
        position: 'absolute',
        top: 5,
        left: 159,
        textAlign: 'center', 
        color: 'black', 
        fontSize: 17, 
        fontFamily: 'Nunito', 
        fontWeight: '700', 
        lineHeight: 22, 
        wordWrap: 'break-word'
      },
      loadingBar:{
        width: 185, 
        height: 34, 
        backgroundColor: '#005FEE', 
        borderRadius: 25.50
      },
      buttonFooter:{
        width: 384, 
        height: 65, 
        paddingLeft: 24, 
        paddingRight: 24, 
        paddingTop: 16, 
        paddingBottom: 16, 
        backgroundColor: '#005FEE',
        borderRadius: 8, 
        justifyContent: 'center',
         alignItems: 'center', 
         gap: 10, 
         display: 'inline-flex'
      },
      buttonText:{
        textAlign: 'center', 
        color: 'white', 
        fontSize: 24, 
        fontFamily: 'Nunito', 
        fontWeight: '900', 
        wordWrap: 'break-word'
      },
      footer:{
        width: 430, 
        height: 129, 
        paddingTop: 16, 
        paddingBottom: 48, 
        paddingLeft: 24, 
        paddingRight: 24, 
        backgroundColor: 'white', 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        gap: 10, 
        display: 'inline-flex'
      },
      titleNumber:{
        left: 24,
        top: 14,
        color: 'black', 
        fontSize: 25, 
        fontFamily: 'Nunito', 
        fontWeight: '700', 
        lineHeight: 30, 
        wordWrap: 'break-word'
      },
    description:{
        top: 35,
        left: 50,
        width: 400, 
        height: 123,
        color: 'black', 
        fontSize: 25, 
        fontFamily: 'Nunito', 
        fontWeight: '600',
        lineHeight: 30,
        wordWrap: 'break-word'
    },
    descriptionThree:{
        left: 50,
        width: 361, 
        color: 'black', 
        fontSize: 25, 
        fontFamily: 'Nunito', 
        fontWeight: '600', 
        lineHeight: 30, 
        wordWrap: 'break-word'   
    },
    descriptionTwo:{
        top: 120,
        left: 54,
        width: 320, 
        color: 'black', 
        fontSize: 15, 
        fontFamily: 'Nunito', 
        fontWeight: '600', 
        lineHeight: 30, 
        wordWrap: 'break-word'
    },
    descriptionFour:{
        top: 155,
        left: 40,
        width: 350, 
        height: 260, 
        color: 'black', 
        fontSize: 15, 
        fontFamily: 'Nunito', 
        fontWeight: '600', 
        lineHeight: 30, 
        wordWrap: 'break-word'
    },
    descriptionFive:{
        left: 15,
        bottom: 77,
        color: 'black', 
        fontSize: 15, 
        fontFamily: 'Nunito', 
        fontWeight: '600', 
        lineHeight: 30, 
        wordWrap: 'break-word'
    },
    descriptionSix:{
        left: 45,
        width: 383, 
        color: 'black', 
        fontSize: 25, 
        fontFamily: 'Nunito', 
        fontWeight: '600', 
        lineHeight: 30, 
        wordWrap: 'break-word'
    }
})