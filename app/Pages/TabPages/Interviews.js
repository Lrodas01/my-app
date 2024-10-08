import { Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useContext } from 'react'
import { Ionicons } from '@expo/vector-icons'
import Schedule from '../../components/schedule'
import Footer from "../../components/Home Page Components/footer";

import { AppContext, AppProvider } from '../../AppContext'


const Interviews = ({navigation, route}) => {
  const { cardsData, recentJobs, selectedCategories, addRecentJob } = useContext(AppContext);

  const { scheduleData } = useContext(AppContext);
  const { selectedOptions } = route.params
  return (

<View style={[styles.container]}>
   
<View style = {{paddingBottom: 0, top: 100, left: 23}}>
    {scheduleData.map((schedule, name) => (
        <Schedule 
        key = {name} 
        name = {schedule.name} 
        time = {schedule.time} 
        career = {schedule.career} 
        profile = {schedule.profile} 
        month = {schedule.monthShort} 
        day = {schedule.day}
        onPress={() => navigation.navigate('SetUp', {schedule})}
        // onPress ={() => {console.log('it!')}}
        />
    ))}
</View>
   <View style = {styles.header}>
      <Text style = {styles.headerText}>Mock Interview</Text>
      <Ionicons style = {styles.funnel} name = 'funnel-outline' size = {36} color={'white'}></Ionicons>
    </View>
    <Footer navigation = {navigation} pass = {route.params}/>
    <Image style = {styles.interview} source ={require('../../../assets/footer/interviewsOn.png')}/>
</View>
  )
}

export default Interviews

const styles = StyleSheet.create({

container: {
  height: '100%',
  backgroundColor: "white",
},

funnel:{
  position: 'absolute',
  left: 374.5,
},

header:{
    width: 430, 
    height: 68, 
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
    display: 'inline-flex',
    position: "absolute",
},
headerText:{
    width: 345, 
    textAlign: 'center', 
    color: 'white', 
    fontSize: 25, 
    fontFamily: 'Nunito', 
    fontWeight: '700', 
    wordWrap: 'break-word',
    position: 'absolute',
},
startButton:{
  width: 152, 
  height: 68, 
  backgroundColor: '#005FEE', 
  borderRadius: 8,
  top: 137,
  left: 139,
},
textButton:{
  top: 23,
  textAlign: 'center', 
  color: 'white', 
  fontSize: 13, 
  fontFamily: 'Nunito', 
  fontWeight: '700', 
  lineHeight: 22, 
  wordWrap: 'break-word'
},
aiContainer:{
  position: 'absolute',
  bottom: 45,
  width: 430, 
  height: 118, 
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
startAIButton:{
  width: 384, 
  height: 54, 
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
aiText:{
  width: 298, 
  textAlign: 'center', 
  color: 'white', 
  fontSize: 16, 
  fontFamily: 'Nunito', 
  fontWeight: '900', 
  wordWrap: 'break-word'
},
shadowAbove:{
  shadowColor: '#171717',
  shadowOffset: { height: 4 },
  shadowOpacity: 0.25,
  shadowRadius: 3,
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
interview:{
  position:"absolute",
  width: 22,
  height: 22,
  bottom: 26,
  right: 61,
}
})