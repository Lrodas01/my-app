import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Schedule = ({name, time}) => {
  return (
<View style = {styles.suoerContainer}>
    <View style = {[styles.container, styles.shadowProp]}>
      <View>
        <Text style = {styles.nameContainer}>{name}</Text>
      </View>
      <Image style = {styles.calender} source = {require('../../assets/images/calender.png')}/>
      <Ionicons style = {styles.profile} name = 'person-outline' size = {20}></Ionicons>
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
    top: 15,
    left: 46,
    width: 217, 
    height: 21, 
    color: 'black', 
    fontSize: 13, 
    fontFamily: 'Nunito', 
    fontWeight: '400', 
    lineHeight: 22, 
    wordWrap: 'break-word'
},
timeContainer:{
    position: 'absolute',
    top: 25,
    left: 136,
    textAlign: 'center', 
    color: 'black', fontSize: 20, fontFamily: 'Nunito', fontWeight: '400', lineHeight: 22, wordWrap: 'break-word'
},
calender:{ 
    position: 'absolute',
    left: 263,
},
profile:{
    position: 'absolute',
    top: 28,
    left: 13.1
},
})