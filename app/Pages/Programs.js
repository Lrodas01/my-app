import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React, { useContext } from 'react'
import Footer from '../components/Home Page Components/footer'
import { AppContext } from '../AppContext'
import Websites from '../components/websites'
import { ScrollView } from 'react-native-gesture-handler'
import Initiatives from '../components/Initiatives'


const Programs = ({navigation, route}) => {

const { job, colleges } = route.params;


  return (
    <View style = {styles.container}>
        <ScrollView contentContainerStyle = {{paddingBottom: 100}}>
    <View style = {styles.header}>
      <Text style = {styles.programTitle}>Extracurriculars to Join</Text>
    </View>
    <View style = {[styles.descriptionTextContainer]}>
        <Text style = {styles.descriptionText}>Academic programs encompass a wide range of disciplines, including business, engineering, computer science, healthcare, humanities, and social sciences, offering specialized knowledge and skills for various career paths.</Text>
    </View>
    <View style = {[styles.websitesRecommendContainer]}>
        <Text style = {styles.websitesTitle}>Websites we recommend</Text>
        <Text style = {styles.websitesDescription}>For {job.titleJob}, the top two recommended websites are:</Text>
    <View style = {styles.websiteContainer}>
        <Websites/>
        <Websites/>
    </View>

    </View>
   <View style = {[styles.joinableProgramsContainer, styles.shadowProp]}>
        <Text style = {styles.joinableProgramsTitle}>Programs to join</Text>
        <Text style = {styles.joinableProgramsDescription}>The top three programs in California for computer programming and computer science are:</Text>

    </View>
        <View style = {styles.initiative}>
            <Initiatives/>
            <Initiatives/>
            <Initiatives/>
        </View>

</ScrollView>
      <Footer navigation = {navigation}/>
    </View>
  )
}

export default Programs

const styles = StyleSheet.create({
container:{
    backgroundColor: 'white',
    height: '100%',
},
header:{
    width: 430, 
    height: 66, 
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
programTitle:{
    width: 345, 
    color: 'white', 
    fontSize: 25, 
    fontFamily: 'Nunito', 
    fontWeight: '700', 
    wordWrap: 'break-word'
},
descriptionTextContainer:{
    top: 37,
    left: 27,
    width: 375, 
    height: 210, 
    backgroundColor: '#FEFEFE',
    borderRadius: 7
},
descriptionText:{
    width: 382, 
    height: 180, 
    color: '#808080', 
    fontSize: 20, 
    fontFamily: 'Nunito', 
    fontWeight: '500', 
    lineHeight: 30, 
    wordWrap: 'break-word'
},
shadowProp:{
    shadowColor: '#171717',
    shadowOffset: { height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3, 
},
websitesRecommendContainer:{
    top: 24,
    width: 430, 
    height: 278, 
    backgroundColor: 'black'
},
websitesTitle:{
    position: 'absolute',
    left: 19,
    top: 14,
    textAlign: 'center', 
    color: 'white', 
    fontSize: 25, 
    fontFamily: 'Nunito', 
    fontWeight: '600', 
    wordWrap: 'break-word'
},
websitesDescription:{
    top: 77,
    left: 24,
    width: 382, 
    height: 38, 
    color: 'white', 
    fontSize: 14, 
    fontFamily: 'Nunito', 
    fontWeight: '400', 
    wordWrap: 'break-word'
},
websiteContainer:{
    flexDirection: 'row',
    top: 91,
},
joinableProgramsContainer:{
    top: 64,
    left: 27,
    width: 375, 
    height: 111, 
    backgroundColor: '#FEFEFE', 
    borderRadius: 7
},
joinableProgramsTitle:{
    textAlign: 'center', 
    color: 'black', 
    fontSize: 25, 
    fontFamily: 'Nunito', 
    fontWeight: '600', 
    lineHeight: 25, 
    wordWrap: 'break-word'
},
joinableProgramsDescription:{
    left: 28,
    width: 320, 
    height: 75, 
    textAlign: 'center', 
    color: '#808080', 
    fontSize: 18, 
    fontFamily: 'Nunito', 
    fontWeight: '400', 
    lineHeight: 25, 
    wordWrap: 'break-word'
},
initiative:{
    flexDirection: 'row',
    top: 89,
},
})