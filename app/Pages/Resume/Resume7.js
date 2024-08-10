import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Resume7({navigation}) {
  return (
<View  style = {styles.container}>
    <View style={styles.header}>
      <Text style = {styles.headerText}>Completed!!!</Text>
    </View>


    <View style = {[styles.loadingBarContainer, styles.shadowProp]}>
        <View style = {styles.loadingBar}>
        <Text style = {styles.loadingBarText}>resume</Text>

        </View>
    </View>

   
    <View style={{top: 164, left: 115}}>
        <Image source={require('../../../assets/images/carbon.png')}/>
    </View>
    <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <Text style = {styles.congratText}>Congratulations</Text>
    </View>
    <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', top: 50,}}>
        <Text style = {styles.learnedText}>you learned the basics about a resume</Text>
    </View>

    <View style = {[styles.footer, styles.shadowUp]}>
    <Pressable onPress = {() => navigation.navigate('No')} style = {styles.buttonFooter}>
      <Text style = {styles.buttonText}>Next</Text>
      </Pressable>
    </View>
</View>     
  )
}

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
        left: 153,
        textAlign: 'center', 
        color: 'white', 
        fontSize: 17, 
        fontFamily: 'Nunito', 
        fontWeight: '700', 
        lineHeight: 22, 
        wordWrap: 'break-word'
      },
      loadingBar:{
        width: 370, 
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
      congratText:{
        top: 200,
        color: 'black',
        fontSize: 32, 
        fontFamily: 'Nunito', 
        fontWeight: '700',
        lineHeight: 36, 
        wordWrap: 'break-word'
      },
      learnedText:{
        width: 342, 
        textAlign: 'center', 
        color: 'black', 
        fontSize: 32, 
        fontFamily: 'Nunito', 
        fontWeight: '400', 
        lineHeight: 30, 
        wordWrap: 'break-word'
      }
})