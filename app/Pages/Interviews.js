import { Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useContext } from 'react'
import { Ionicons } from '@expo/vector-icons'
import Schedule from '../components/schedule'
import Footer from '../components/Home Page Components/footer'
import { AppContext, AppProvider } from '../AppContext'


const Interviews = ({navigation, route}) => {
  const { cardsData } = useContext(AppContext);

  return (
<>
<View style={[styles.container]}>
   
<ScrollView contentContainerStyle = {{paddingBottom: 200,}}>
    <Pressable style = {styles.startButton}>
      <Text style= {styles.textButton}>Start</Text>
    </Pressable>
    {cardsData.map((schedule, index) => (
        <Schedule key = {index} name = {schedule.name} time = {schedule.time}/>
    ))}
  </ScrollView>
   <View style = {styles.header}>
      <Text style = {styles.headerText}>Mock Interview</Text>
      <Ionicons style = {styles.funnel} name = 'funnel-outline' size = {36} color={'white'}></Ionicons>
    </View>
</View>
<Footer navigation={navigation}/>
</>
  )
}

export default Interviews

const styles = StyleSheet.create({

container: {
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
scheduleContainer:{
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
})