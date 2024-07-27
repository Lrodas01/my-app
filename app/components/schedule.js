import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Schedule = ({name, time, career, profile}) => {
  return (
<View style = {styles.superContainer}>
    <View style = {[styles.container, styles.shadowProp]}>
      <View>
        <Text style = {styles.nameContainer}>{name}</Text>
      </View>
      <View>
        <Text style = {styles.careerContainer}>{career}</Text>
      </View>
      <Image style = {styles.calender} source = {require('../../assets/images/calender.png')}/>
      <Image style = {styles.profile} source={profile}/>
      <View>
        <Text style = {styles.timeContainer}>
            {time}
        </Text>
      </View>

    </View>
</View>
  )
}

export default Schedule

const styles = StyleSheet.create({
superContainer:{

    },
container:{
    marginBottom: 26,
    top: 183,
    left: 41,
    width: 345, 
    height: 85, 
    backgroundColor: 'white', 
    borderRadius: 9
},
shadowProp:{
    shadowColor: '#171717',
    shadowOffset: { height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
},
nameContainer:{ 
    width: 43, 
    textAlign: 'center', 
    color: 'black', 
    fontSize: 10, 
    fontFamily: 'Nunito', 
    fontWeight: '400', 
    lineHeight: 10, 
    wordWrap: 'break-word',
    top: 62,
    left: 10,
},
timeContainer:{
    textAlign: 'center', 
    color: 'black', 
    fontSize: 20, 
    fontFamily: 'Nunito', 
    fontWeight: '400', 
    lineHeight: 22, 
    wordWrap: 'break-word',
    bottom: 40,
},
careerContainer:{
  fontSize: 20,
  fontFamily: 'Nunito',
  fontWeight: '400',
  left: 61,
  height: 22,
  width: 199,
  lineHeight: 22,
},
calender:{ 
    position: 'absolute',
    left: 263,
},
profile:{
    bottom: 34,
    left: 8,
    width: 50,
    height: 50,
    borderRadius: '100%'
},
})