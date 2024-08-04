import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Schedule = ({name, time, career, profile, month, day, onPress, navigation }) => {
  return (
<View style = {styles.superContainer} >
    <Pressable onPress= {onPress} style = {[styles.container, styles.shadowProp]} >
      <View>
        <Text style = {styles.nameContainer}>{name}</Text>
      </View>
      <View>
        <Text style = {styles.careerContainer}>{career}</Text>
      </View>
      <Image style = {styles.calender} source = {require('../../assets/images/calender.png')}/>
      <Text style = {styles.month}>{month}</Text><Text style = {styles.day}>{day}</Text>
      <Image style = {styles.profile} source={profile}/>
      <View>
        <Text style = {styles.timeContainer}>
            {time}
        </Text>
      </View>

    </Pressable>
</View>
  )
}

export default Schedule

const styles = StyleSheet.create({
superContainer:{

    },
container:{
  margin: 20,
  width: 348, 
  height: 92, 
  position: 'relative', 
  backgroundColor: 'white', 
  borderRadius: 8
},
shadowProp:{
    shadowColor: '#171717',
    shadowOffset: { height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
},
nameContainer:{ 
  top: 25,
  left: 61,
  width: 80, 
  textAlign: 'center', 
  color: 'black', 
  fontSize: 10, 
  fontFamily: 'Nunito', 
  fontWeight: '400', 
  lineHeight: 10, 
  wordWrap: 'break-word'
},
timeContainer:{
  bottom: 15,
  right: 10,
  textAlign: 'right', 
  color: 'black', 
  fontSize: 14, 
  fontFamily: 'Nunito', 
  fontWeight: '400', 
  lineHeight: 22, 
  wordWrap: 'break-word'
},
careerContainer:{
  top: 25,
  left: 68,
  color: 'black',
  fontSize: 16, 
  fontFamily: 'Nunito', 
  fontWeight: '400', 
  lineHeight: 22, 
  wordWrap: 'break-word'
},
calender:{ 
    position: 'absolute',
    left: 283,
    top: 13,
},
profile:{
    bottom: 11,
    left: 8,
    width: 50,
    height: 50,
    borderRadius: '100%'
},
month:{
  flex: 1,
  flexDirection: 'row',
  position: 'absolute',
  width: 22,
  right: 25,
  top: 23,
  color: 'white', 
  fontSize: 10, 
  fontFamily: 'Nunito', 
  fontWeight: '700', 
  lineHeight: 10, 
  flexWrap: 'nowrap'
},
day:{
  position: 'absolute',
  top: 38,
  right: 9,
  width: 56, 
  textAlign: 'center', 
  color: 'black', 
  fontSize: 14, 
  fontFamily: 'Nunito', 
  fontWeight: '400', 
  lineHeight: 22, 
  wordWrap: 'break-word'
},
})