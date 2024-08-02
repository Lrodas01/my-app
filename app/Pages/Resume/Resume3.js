import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'

const Resume3 = ({navigation}) => {
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
<ScrollView contentContainerStyle = {{paddingBottom: 225}}>
        <View>
            <Text style = {styles.titleNumber}>3. Format your resume</Text>
        </View>
        <View>
            <Text style = {{position: 'absolute', fontSize: 50, left: 15, top: 59}}>{`\u2022`}</Text>
            <Text style = {styles.description}>Contact Information: Your full name, phone number, email address, and LinkedIn profile (optional).</Text>
        <View style = {{flexDirection: 'row', flexWrap: 'wrap',top: 100}}>
            <Image style = {{width: 200, height: 280.67}} source = {require('../../../assets/templates/template5.png')}/>
            <Image style = {{width: 200, height: 258.80, left: 20,}} source = {require('../../../assets/templates/template6.png')}/>
            <Image style = {{width: 50, height: 50, left: 293}} source = {require('../../../assets/images/cross.png')}/>
            <Image style = {{width: 50, height: 50, left: 24}} source = {require('../../../assets/images/checkmark.png')}/>
        </View>
            <Text style = {{position: 'absolute', fontSize: 50, left: 15, top: 569}}>{`\u2022`}</Text>
            <Text style = {[styles.descriptionTwo, {top: 130}]}>Choose easy-to-read fonts and consistent formatting for headings, subheadings, and bullet points.</Text>
            <Text style = {{position: 'absolute', fontSize: 50, left: 15, top: 738}}>{`\u2022`}</Text>
            <Text style = {[styles.descriptionTwo, {top: 180}]}>Ensure there is enough white space to make the resume readable.</Text>
        </View>
</ScrollView>

    <View style = {[styles.footer, styles.shadowUp]}>
    <Pressable onPress = {() => navigation.navigate('Resume4')} style = {styles.buttonFooter}>
      <Text style = {styles.buttonText}>Next</Text>
      </Pressable>
    </View>
</View>    
  )
}

export default Resume3

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
        top: 75,
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
    descriptionTwo:{
        left: 50,
        width: 380, 
        color: 'black', 
        fontSize: 25, 
        fontFamily: 'Nunito', 
        fontWeight: '600', 
        wordWrap: 'break-word'
    }
})