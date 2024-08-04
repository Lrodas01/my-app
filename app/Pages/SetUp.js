import { StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native'
import React from 'react'
import Footer from '../components/Home Page Components/footer';
import { ScrollView } from 'react-native-gesture-handler';

const SetUp = ({route, navigation}) => {
    const { schedule } = route.params;

    const handlePress = () => {
        Alert.alert('Appointment Made');
        navigation.goBack('ActualHome')
    }
    
  return (
    <View style = {styles.container}>

      <View style = {styles.header}>
        <Text style = {styles.headerText}>User’s Information</Text>
      </View>
         <ScrollView contentContainerStyle = {{paddingBottom: 130,}}> 
      <Text style={styles.title}>{schedule.name}</Text>
      <Image source={schedule.profile} style={styles.image} />
      <Text style={styles.description}>{schedule.description}</Text>
      <Text style = {styles.funFact1}>{schedule.funFact1}</Text>
      <Text style = {styles.funFact2}>{schedule.funFact2}</Text>
      <Text style = {{position: 'absolute', fontSize: 50, left: 15, top: 121}}>{`\u2022`}</Text>
      <Text style = {{position: 'absolute', fontSize: 50, left: 15, top: 171}}>{`\u2022`}</Text>

      <Image style = {styles.calender} source ={require('../../assets/templates/calender.png')}/>

    <Pressable style = {styles.setAppointment} onPress = {handlePress}>
      <Text style={styles.month}>{schedule.month} </Text>
      <Text style = {styles.dayth}>{schedule.dayth}</Text>
      <Text style={styles.time}>{schedule.time}</Text>
      <View style = {{bottom: 40}}>
        <Text style = {styles.appointmentText}>Set appointment</Text>
      </View>
    </Pressable>
    </ScrollView>
      <Footer navigation={navigation}/>
    </View>

  )
}

export default SetUp

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
headerText:{
    width: 345, 
    textAlign: 'center', 
    color: 'white', 
    fontSize: 25, 
    fontFamily: 'Nunito', 
    fontWeight: '700', 
    wordWrap: 'break-word'
},
title: {
    textAlign: 'center', 
    left: 56,
    top: 30,
    color: 'black', 
    fontSize: 25, 
    fontFamily: 'Nunito', 
    fontWeight: '400', 
    lineHeight: 26, 
    wordWrap: 'break-word'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    left: 31,
    bottom: 0,
  },
  detail: {
    fontSize: 18,
    marginBottom: 5,
  },
  description:{
    left: 157,
    bottom: 80,
    width: 273, 
    color: '#808080', 
    fontSize: 15, 
    fontFamily: 'Nunito', 
    fontWeight: '400', 
    lineHeight: 30, 
    wordWrap: 'break-word'
  },
  funFact1:{
    textAlign: 'center', 
    color: 'black', 
    fontSize: 25, 
    fontFamily: 'Nunito', 
    fontWeight: '400', 
    lineHeight: 28, 
    wordWrap: 'break-word',
    right: 20,
    bottom: 55,
  },
  funFact2:{
    right: 73,
    textAlign: 'center', 
    color: 'black', 
    fontSize: 25, 
    fontFamily: 'Nunito', 
    fontWeight: '400', 
    lineHeight: 28, 
    bottom: 35,
    wordWrap: 'break-word',
  },
  calender:{
    width: 306,
    height: 310,
    left: 62,
  },
  setAppointment:{
    width: 380, 
    height: 92, 
    backgroundColor: '#005FEE', 
    borderRadius: 8,
    top: 30,
    left: 25,
  },
  month:{
    textAlign: 'center', 
    color: '#FBFBFB', 
    fontSize: 25, 
    fontFamily: 'Nunito', 
    fontWeight: '400', 
    lineHeight: 34, 
    wordWrap: 'break-word',
    right: 122,
    top: 5,
  },
  dayth:{
    color: '#FBFBFB', 
    fontSize: 24, 
    fontFamily: 'Nunito', 
    fontWeight: '400', 
    lineHeight: 34, 
    wordWrap: 'break-word',
    bottom: 28,
    left: 115
  },
  time:{
    textAlign: 'center', 
    color: 'white', 
    fontSize: 23, 
    fontFamily: 'Nunito', 
    fontWeight: '400', 
    lineHeight: 28, 
    wordWrap: 'break-word',
    bottom: 59,
    left: 130
  },
  appointmentText:{
    textAlign: 'center', 
    color: 'white', 
    fontSize: 25, 
    fontFamily: 'Nunito', 
    fontWeight: '400', 
    lineHeight: 28, 
    wordWrap: 'break-word'
  }
})