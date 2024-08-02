import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'

const Resume4 = ({navigation}) => {
  return (
<View  style = {styles.container}>
    <View style={styles.header}>
    <Pressable onPress={()=>navigation.goBack('')} style = {styles.backButton}>
        <Ionicons name = 'chevron-back-outline' color={'white'} size={50}/>
      </Pressable>
      <Text style = {styles.headerText}>Resume for Dummies</Text>
    </View>
    <View style = {[styles.loadingBarContainer, styles.shadowProp]}>
        <Text style = {styles.loadingBarText}>resume</Text>
        <View style = {styles.loadingBar}>

        </View>
    </View>
    <View style = {{height: 20}}>

    </View>
    <ScrollView>
        <View>
            <Text style = {[styles.titleNumber, {top: 10}]}>4. Tailor your resume</Text>
        </View>
        <Text style = {{position: 'absolute', fontSize: 50, left: 15, top: 55}}>{`\u2022`}</Text>
        <Text style = {styles.description}>Customize your resume for each job application.</Text>
        <Image style = {{width: '100%', height: 215, top: 50}} source={require('../../../assets/templates/template7.png')}/>
        <Text style = {{position: 'absolute', fontSize: 50, left: 15, top: 354}}>{`\u2022`}</Text>
        <Text style = {[styles.description, {top: 77}]}>Highlight the most relevant experience and skills for each position.</Text>
            <Text style = {styles.descriptionTwo}>mcdonalds worker</Text>
            <Text style = {styles.descriptionThree}>ceo of apple</Text>
    </ScrollView>


    <View style = {[styles.footer, styles.shadowUp]}>
    <Pressable onPress = {() => navigation.navigate('Resume5')} style = {styles.buttonFooter}>
      <Text style = {styles.buttonText}>Next</Text>
      </Pressable>
    </View>
</View>    
  )
}

export default Resume4

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
        width: 25.90, 
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
        left: 45,
        top: 44,
        width: 400, 
        color: 'black', 
        fontSize: 25, 
        fontFamily: 'Nunito', 
        fontWeight: '700', 
        lineHeight: 26, 
        wordWrap: 'break-word'
      },
      descriptionTwo:{
        top: 100,
        left: 20,
        color: 'black', 
        fontSize: 25, 
        fontFamily: 'Nunito', 
        fontWeight: '400', 
        lineHeight: 26, 
        wordWrap: 'break-word'
      },
      descriptionThree:{
        top: 75,
        left: 253,
        color: '#E4DB05', 
        fontSize: 25, 
        fontFamily: 'Nunito', 
        fontWeight: '900', 
        lineHeight: 26, 
        wordWrap: 'break-word'
      }
})